"use client"

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Spin } from 'antd';



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading,setIsLoading]=useState<boolean>(false)

    useEffect(() => {
      if (!userLoggedIn) {
        router.push("/login")
      }
      setIsLoading(true)
    }, [router,isLoading,userLoggedIn]);
    if(!isLoading){
        return <p>Loading...<Spin/></p>
    }
    
    return (
        <Layout hasSider>
            <Sidebar />
            {/* {children} */}
            <Contents>{children}</Contents>
        </Layout>
    );
};

export default DashboardLayout;
