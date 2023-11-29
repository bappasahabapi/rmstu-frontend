"use client"

import { Layout } from "antd";
// import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";

const {Content}=Layout;

const Contents = ({children}:{children:React.ReactNode}) => {

    // const base ='admin'
    return (
        <Content
        style={{minHeight:"100vh",color:"black"}}
        >
            <Header/>
            {/* <UMBreadCrumb
            items={[
                {
                    label:`${base}`,
                    link:`${base}`
                   
                },
                {
                    label:"student",
                    link:`${base}/student`
                   
                },
            ]}
            /> */}
            <div style={{
               padding:'10px'
            }}>

            {children}
            </div>
        </Content>
    );
};

export default Contents;