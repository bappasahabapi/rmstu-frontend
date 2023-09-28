"use client"

import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import { useState } from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { sidebaritems } from "@/constants/sidebaritems";
import { USER_ROLE } from "@/constants/role";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const role=USER_ROLE.STUDENT
    // const role=USER_ROLE.FACULTY
    // const role=USER_ROLE.ADMIN
    const role=USER_ROLE.SUPER_ADMIN

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
                fontSize:'2rem',
                textAlign:"center",
                fontWeight:'bold',
                marginBottom:'1rem'
            }}
            >
                🏛️-RMSTU
            </div>
            <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']}
             mode="inline"
            //  items={items}
            items={sidebaritems(role)}
             />
        </Sider>
    );
};

export default Sidebar;