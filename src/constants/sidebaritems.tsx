
import type { MenuProps } from 'antd';
import {
    ProfileTwoTone,
    UserAddOutlined,
    KeyOutlined,
    TableOutlined,
    SmileOutlined


} from '@ant-design/icons';
import { USER_ROLE } from './role';
import Link from 'next/link';

export const sidebaritems = (role: string) => {
    // console.log(role)
    const defaultSidebarItems: MenuProps['items'] = [
        {
            label: 'Profile',
            key: 'profile',
            icon: <ProfileTwoTone />,
            // children-> //means dropdown menu
            children: [
                {
                    // label:'Account Profile',
                    // key:'account-profile'

                    label: <Link href={`/${role}/profile`}> Account Profile</Link>,
                    key: `/${role}/profile`,
                    icon: <UserAddOutlined />
                    // icon:'👤'
                },
                {
                    label: <Link href={`/${role}/profile`}>Change Password</Link>,
                    key: `/${role}/change-passowrd`,
                    icon: <KeyOutlined />
                },
            ]
        }
    ];

    const commonAdminSidebarItems: MenuProps['items'] = [
        {
            label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
            key: `/${role}/manage-students`,
            icon: <TableOutlined />
        },
        {
            label: <Link href={`/${role}/manage-faculty`}>Manage Faculties</Link>,
            key: `/${role}/manage-faculty`,
            icon: <SmileOutlined />
        },
    ];

    if (role === USER_ROLE.STUDENT) return defaultSidebarItems;
    else if (role === 'super_admin') return commonAdminSidebarItems;
    else if (role === USER_ROLE.FACULTY) return commonAdminSidebarItems;
};
