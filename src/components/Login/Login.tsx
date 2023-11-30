"use client"

import { Alert, Button, Col, Row } from "antd";
import loginImage from "../../assets/login-image.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormValues = {
    id: string;
    password: string;
}

const LoginPage = () => {

    // console.log(getUserInfo()) ;
    // console.log(isLoggedIn());
    const [userLogin] = useUserLoginMutation()
    const router = useRouter()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            // console.log(data)
            const res = await userLogin({ ...data }).unwrap();
            console.log(res)
            if (res?.accessToken) {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                    router.push("/profile");
                  }, 1000);
                // router.push("/profile")
            }
            storeUserInfo({ accessToken: res?.accessToken });
        }
        catch (error: any) { console.error(error.message) }
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
                {showSuccessMessage && (
                            <Alert
                                message="SuccessFully Loggin"
                                type="success"
                                style={{ marginTop: "0 px" , padding:"20 px",fontWeight: "bold" }}
                            />
                        )}
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