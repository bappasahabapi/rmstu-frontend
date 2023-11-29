"use client"

import { Layout, Menu } from "antd";
import { useState } from "react";
import { sidebaritems } from "@/constants/sidebaritems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const role=USER_ROLE.ADMIN
    const {role} =getUserInfo() as any;
    console.log(role)

    return (
        <Sider
            collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow:'auto',
                height:'100vh',
                position:'sticky',
                left:0,
                top:0,
                bottom:0
            }}
        >
            <div
            style={{
                color: 'white',
                fontSize:'1.5rem',
                textAlign:"center",
                fontWeight:'bold',
                marginBottom:'1 rem'
            }}
            >
                🏛️ RMSTU
            </div>
            <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']}
             mode="inline"
            items={sidebaritems(role)}
             />
        </Sider>
    );
};

export default Sidebar;