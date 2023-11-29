import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { removeUserInfor } from '@/services/auth.service';
import { authKey } from '@/constants/storageKey';
import { useRouter } from 'next/navigation';
const { Header: AntHeader } = Layout;

const Header = () => {
    const router =useRouter();
    const logOut =()=>{
        removeUserInfor(authKey);
        router.push("/login");
    }


    const items: MenuProps['items'] = [{
        key: "0",
        label: <Button type='text' danger onClick={logOut}>
            <b>Logout</b>
        </Button>
    }]
    return (
        <AntHeader style={{backgroundColor:"#fff"}}>
            <Row justify="end"align="middle" style={{height:"100%"}}>
                <Dropdown menu={{ items }}>
                    {/* <a href="">hellow</a> */}
                    <a>
                        <Space wrap size={16}>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Space>
                    </a>
                </Dropdown>
            </Row>
        </AntHeader>
    );
};

export default Header;