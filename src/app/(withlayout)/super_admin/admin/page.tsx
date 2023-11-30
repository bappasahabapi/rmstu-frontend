import ActionBar from '@/components/ui/ActionBar';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const Admin = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Admin Page</h1>
            <div>
                <UMBreadCrumb
                    items={[
                        {

                            label: 'super_admin',
                            link: '/super_admin',

                        },
                    ]}
                />
                <ActionBar title='Admin List'>
                    <Link href="/super_admin/admin/create">
                        <Button type="primary">Create Admin</Button>
                    </Link>
                </ActionBar>
            </div>
        </div>
    );
};

export default Admin;