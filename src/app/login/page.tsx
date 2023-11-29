import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata:Metadata={
    title:"RMSTU | Login"
}

const Login = () => {
    return (
        <>
            <LoginPage/>
        </>
    );
};

export default Login;