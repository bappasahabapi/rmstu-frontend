"use client"
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import ActionBar from "@/components/ui/ActionBar";

const ManageDepartmentPage = () => {

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;


  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const departments = data?.departments;
  const meta = data?.meta;

  const columnsData = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      sorter: true,
    },
    {
      title: 'Action',
      render: function (data: any) {
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
                backgroundColor: 'green-light'
              }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <  EyeOutlined />
            </Button>
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
              onClick={() => console.log(data)}
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
            <Button style={{ backgroundColor: "#33E3FF", }} type="primary" >Create Department </Button>
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
    </div>
  );
};

export default ManageDepartmentPage;