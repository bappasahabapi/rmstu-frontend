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
            {/* <h1 style={{textAlign:"center",marginTop:"20px"}}>This is login page </h1> */}
            {/* This grid system is 24 col */}
            <Row>
                <Col sm={12} md={16} lg={16} >
                    <Image
                        src={loginImage}
                        width={500}
                        alt="loginImage"
                    />
                </Col>
                <Col sm={12} md={8} lg={8} >
                    <h1>First login your account</h1>
                    <div>
                        <Form submitHandler={onSubmit}>
                            <div>
                                <FormInput
                                    name="id"
                                    type="text"
                                    size="large"
                                    placeholder="user name"
                                    label="User Id"

                                />
                                <FormInput
                                    name="password"
                                    type="password"
                                    size="large"
                                    placeholder="user passowrd"
                                    label="User Password"

                                />
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