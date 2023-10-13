"use client"

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/login-image.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";

   // {
            //     "success": true,
            //     "statusCode": 200,
            //     "message": "User loged in!",
            //     "data": {
            //         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDAwMSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTY5NzE3NzgzMiwiZXhwIjoxNzIzMDk3ODMyfQ.YoWmvzPIk6q7wTV3ZOgYni-gMsrmR0xS8_rROzNE9Ec",
            //         "needsPasswordChange": true
            //     }
            // }

type FormValues = {
    id: string;
    password: string;
}

const LoginPage = () => {


    console.log(getUserInfo()) ;


    const [userLogin]=useUserLoginMutation()

    const onSubmit: SubmitHandler<FormValues> =async(data:any) => {
        try {
            // console.log(data)
            const res =await userLogin({...data}).unwrap();
            console.log(res)
            storeUserInfo({accessToken:res?.data?.accessToken});
        }
        catch (error:any) {console.error(error.message)}
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