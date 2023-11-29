import { Button, Row, Result } from "antd";

const NotFoundPage = () => {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                height: "100vh",
            }}
        >
            <h1>404!!! Page Not Found!</h1>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </Row>
    );
};

export default NotFoundPage;



