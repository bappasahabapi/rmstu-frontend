
import type { MenuProps } from 'antd';
import {
    ProfileTwoTone,
    UserAddOutlined,
    KeyOutlined,
    TableOutlined,
    SmileOutlined,
    SolutionOutlined,
    AppstoreAddOutlined,
    FileTextOutlined,
    ScheduleOutlined,
    AppstoreOutlined,
    ThunderboltOutlined,
    CreditCardOutlined



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

    const adminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label: "Manage Academic",
            key: "manage-academic",
            icon: <SolutionOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/academic/faculty`}> Faculties</Link>,
                    key: `/${role}/academic/faculty`,
                    icon: '🕵️'
                },
                {
                    label: <Link href={`/${role}/academic/department`}> Departments</Link>,
                    key: `/${role}/academic/department`,
                    icon: '🏤'
                },
                {
                    label: <Link href={`/${role}/academic/semester`}> Semester</Link>,
                    key: `/${role}/academic/semester`,
                    icon: '📚',
                },
            ]
        },
        {
            label: "Management",
            key: 'management',
            icon: <AppstoreAddOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/department`}> Department</Link>,
                    key: `/${role}/department`,
                },
                {
                    label: <Link href={`/${role}/building`}> Buildings</Link>,
                    key: `/${role}/building`,
                },
                {
                    label: <Link href={`/${role}/room`}> Rooms</Link>,
                    key: `/${role}/room`,
                },
                {
                    label: <Link href={`/${role}/course`}> Courses</Link>,
                    key: `/${role}/course`,
                },
                {
                    label: <Link href={`/${role}/department`}> Department</Link>,
                    key: `/${role}/department`,
                },
                {
                    label: (
                        <Link href={`/${role}/semester-registration`}>
                            Semester registration
                        </Link>
                    ),
                    key: `/${role}/semester-registration`,
                },
                {
                    label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
                    key: `/${role}/offered-course`,
                },
                {
                    label: (
                        <Link href={`/${role}/offered-course-section`}>
                            Course sections
                        </Link>
                    ),
                    key: `/${role}/offered-course-section`,
                },
                {
                    label: (
                        <Link href={`/${role}/offered-course-schedule`}>
                            Course schedules
                        </Link>
                    ),
                    key: `/${role}/offered-course-schedule`,
                },

            ]
        }
    ];

    const superAdminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
          label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
          icon: <TableOutlined />,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/user`}>Manage User</Link>,
          icon: <TableOutlined />,
          key: `/${role}/user`,
        },
        // {
        //   label: "Manage permission",
        //   key: "manage-permission",
        //   icon: <AppstoreOutlined />,
        //   children: [
        //     {
        //       label: <Link href={`/${role}/permission`}>View permissions</Link>,
        //       key: `/${role}/permission`,
        //     },
        //   ],
        // },
        {
          label: "Management",
          key: "management",
          icon: <AppstoreOutlined />,
          children: [
            {
              label: <Link href={`/${role}/department`}>Department</Link>,
              key: `/${role}/department`,
            },
          ],
        },
      ];
    
    const facultySidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/courses`}>Courses</Link>,
          icon: <TableOutlined />,
          key: `/${role}/courses`,
        },
      ];
    
    const studentSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/courses`}>Courses</Link>,
          icon: <TableOutlined />,
          key: `/${role}/courses`,
        },
        {
          label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
          icon: <ScheduleOutlined />,
          key: `/${role}/courses/schedule`,
        },
        {
          label: <Link href={`/${role}/registration`}>Registration</Link>,
          icon: <ThunderboltOutlined />,
          key: `/${role}/registration`,
        },
        {
          label: <Link href={`/${role}/payment`}>Payment</Link>,
          icon: <CreditCardOutlined />,
          key: `/${role}/payment`,
        },
        {
          label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
          icon: <FileTextOutlined />,
          key: `/${role}/academic-report`,
        },
      ];

    //todo: role is set in the `sidebar.tsx` file

    if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
    else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
    else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
    else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
    else {
      return defaultSidebarItems;
    }
};
