import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { getUserInfo, removeUserInfor } from '@/services/auth.service';
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

    const {role}=getUserInfo() as any;
    return (
        <AntHeader style={{backgroundColor:"#fff"}}>
            <Row justify="end"align="middle" style={{height:"100%"}}>
            <p
          style={{
            margin: "0px 5px",
          }}
        >
          {role}
        </p>
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