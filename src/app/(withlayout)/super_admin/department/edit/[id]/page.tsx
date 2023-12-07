'use client'

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDepartmentQuery, useUpdateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";


type IDProps = {
    params: any
}

const EditDepartmentPage = ({ params }: IDProps) => {
    // console.log(params);
    const { id } = params;
    const router =useRouter()

    //fetch the single id data
    const { data: values, isLoading } = useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation()

    const onSubmit = async (values: { title: string }) => {
        message.open({
            type: "success",
            content: "Updating Department...",
            // duration: 1
        });
        try {
            // console.log(values);
            await updateDepartment({ id, body: values }) // set to redux store
            message.success("Department Successfully Updated ☺️ ");
            router.push("/super_admin/department")
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };

    // show the data in the input field
    //@ts-ignore
    const defaultValues = {
        title: values?.title || ""
    }


    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "super_admin",
                        link: "/super_admin",
                    },
                    {
                        label: "department",
                        link: "/super_admin/department",
                    },
                ]}
            />
            <ActionBar title="Update Department" />
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Update Department 🫵
                </Button>
            </Form>
        </div>
    );
};

export default EditDepartmentPage;