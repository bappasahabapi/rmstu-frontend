
import type { MenuProps } from 'antd';
import {
    UserOutlined,
  } from '@ant-design/icons';
import { USER_ROLE } from './role';

export const sidebaritems = (role:string) => {
    console.log(role)
    const defaultSidebarItems:MenuProps['items']=[
        {
            label:'👨‍🎓 Student Profile',
            key:'profile',
            icon:<UserOutlined/>,
            // children-> //means dropdown menu
            children:[
                {
                    label:'Account Profile',
                    key:'account-profile'
                },
                {
                    label:'Change Password',
                    key:'change-passowrd'
                },
            ] 
        }
    ]
     if(role === USER_ROLE.STUDENT)  return defaultSidebarItems;
};
