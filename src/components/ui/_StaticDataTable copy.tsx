

'use client'

import { Table } from "antd";


const StaticDataTable = () => {

    const columnsData = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // align: 'right',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
    ];

    const tableData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
        },
    ];

    const onPageSizeChange = (pageNo:number, pageSize:number) => {
        console.log(pageNo,pageSize)
    }


    return (
        <Table
            columns={columnsData}
            loading={false}
            dataSource={tableData}
            pagination={{
                pageSize:5,
                total:20,
                pageSizeOptions:[5,10,20],
                showSizeChanger:true,
                onChange:onPageSizeChange
            }}
        />
    );
};

export default StaticDataTable;