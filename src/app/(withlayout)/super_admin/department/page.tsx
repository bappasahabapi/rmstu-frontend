"use client"
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDeleteDepartmentMutation, useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import ActionBar from "@/components/ui/ActionBar";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import UMModal from "@/components/ui/Modal";


const ManageDepartmentPage = () => {

  const query: Record<string, any> = {};

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [departmentIdToDelete, setDepartmentIdToDelete] = useState<string | null>(null);

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(4);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  //hook create
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 500,
  });

  if (!!debouncedTerm) {
    // query["searchTerm"] = searchTerm;
    query["searchTerm"] = debouncedTerm;
  }


  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const [deleteDepartment]=useDeleteDepartmentMutation();
  const departments = data?.departments;
  const meta = data?.meta;
  


  //todo: Delete Department
//   const deleteHandler = async (id:string) => {
//     message.open({
//         type: "warning",
//         content: "Deleting Department...",
//     });
//     try {
//        await deleteDepartment(id) // set to redux store
//         message.success("Department Successfully Deleted :( ");
//     } catch (err: any) {
//         console.error(err.message);
//         message.error(err.message);
//     }
// };

//todo: using modals
const deleteHandler = (id: string) => {
  setDepartmentIdToDelete(id);
  setIsModalVisible(true);
};

const onOkDeleteHandler = async () => {
  if (departmentIdToDelete) {
    message.open({
      type: 'warning',
      content: 'Deleting Department...',
    });
    try {
      await deleteDepartment(departmentIdToDelete);
      message.success('Department Successfully Deleted :(');
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    } finally {
      setIsModalVisible(false);
      setDepartmentIdToDelete(null);
    }
  }
};


  const columnsData = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: 'Action',
      render: function (data: any) {
        return (
          <>

            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>

        )
      }
    },
  ];

  const onPaginationChange = (pageNo: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize)
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");

  };

  const resetFilters =()=>{
    setSortOrder("");
    setSortBy("");
    setSearchTerm("");
  }


  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search ..."
          style={{ width: "40%" }}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <div>
        {
            (!!sortBy || !!sortOrder || !!searchTerm)
            && <Button type="primary" style={{ marginRight:"15px", backgroundColor:"yellowgreen" }}>
              <ReloadOutlined onClick={resetFilters} />
            </Button>
          }
          <Link href="/super_admin/department/create">
            <Button style={{ backgroundColor: "#228B22", }} type="primary" >Create Department </Button>
          </Link>
         
        </div>

      </ActionBar>



      <UMTable
        loading={isLoading}
        columns={columnsData}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    {/* <UMModal
    visible={isModalVisible}
    onOk={onOkDeleteHandler}
    onCancel={() => setIsModalVisible(false)}
    title="Confirmatation"
    /> */}

    <UMModal
        visible={isModalVisible}
        onOk={onOkDeleteHandler}
        onCancel={() => setIsModalVisible(false)}
        title={data?.departments.title || "Confirmation ❗❗"}
    >
      <h1>Are You Sure Want to Delete ❓ </h1>
    </UMModal>
    </div>
  );
};

export default ManageDepartmentPage;