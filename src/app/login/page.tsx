"use client"

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/login-image.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
    id: string;
    password: string;
}

const LoginPage = () => {


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        try {
            console.log(data)
        }
        catch (error) {

        }
    };


    return (
        <div>
            <Row
                justify='center'
                align='middle'
                style={{
                    minHeight: '100vh'
                }}
            >
                <Col sm={12} md={18} lg={8} >
                    <Image
                        src={loginImage}
                        width={500}
                        alt="loginImage"
                    />
                </Col>
                <Col sm={12} md={8} lg={8} >
                    <h1
                        style={{ margin: '15px 0px' }}
                    >First login your account</h1>
                    <div >
                        <Form submitHandler={onSubmit}>
                            <div >
                                <div>
                                    <FormInput
                                        name="id"
                                        type="text"
                                        size="large"
                                        placeholder="user name"
                                        label="User Id"

                                    />
                                </div>

                                <div style={{ margin: '15px 0px' }}>
                                    <FormInput
                                        name="password"
                                        type="password"
                                        size="large"
                                        placeholder="user passowrd"
                                        label="User Password"

                                    />
                                </div>

                            </div>
                            <Button
                                htmlType="submit"
                                type="primary"
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default LoginPage;