
import type { MenuProps } from 'antd';
import {
    ProfileFilled
  } from '@ant-design/icons';
import { USER_ROLE } from './role';
import Link from 'next/link';

export const sidebaritems = (role:string) => {
    // console.log(role)
    const defaultSidebarItems:MenuProps['items']=[
        {
            label:'Profile',
            key:'profile',
            icon:<ProfileFilled/>,
            // children-> //means dropdown menu
            children:[
                {
                    // label:'Account Profile',
                    // key:'account-profile'

                    label:<Link href={`/${role}/profile`}>Account Profile</Link> , 
                    key:`/${role}/profile`,
                },
                {
                    label:<Link href={`/${role}/profile`}>Change Password</Link> , 
                    key:`/${role}/change-passowrd`,
                },
            ] 
        }
    ];

    const commonAdminSidebarItems:MenuProps['items'] =[{
        label:<Link href={`/${role}/manage-student`}>Manage Students</Link>    ,
        key:'manage-students',
    }];

     if(role === USER_ROLE.STUDENT)  return defaultSidebarItems;
     else if(role === 'super_admin')  return commonAdminSidebarItems;
};
