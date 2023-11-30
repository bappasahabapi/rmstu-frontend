"use client"

import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';

const ManageFacultyPage = () => {
    const { role } = getUserInfo() as any;
    return (
        <div>
            <div>
                <UMBreadCrumb
                    items={[
                        {
                            label: `${role}`,
                            link: `/${role}`,

                        },
                    ]}
                />
                <h1 style={{ textAlign: "center" }}>Manage Students Page</h1>
                <Link href="/super_admin/manage-factulty/create">
                    <Button type="primary">Create</Button>
                </Link>
            </div>
        </div>
    );
};

export default ManageFacultyPage;