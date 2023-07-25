import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Data = [{ id: 1, Nam: "Admin", Pass: 123 }, { id: 2, Nam: "Bhavu", Pass: 1234 }]

const Login = () => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        const log = Data.find((i) => i.Nam == values.username)
        if (log) {
            if (log.Pass == values.password) {


                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                    text: `Go To Home Page...`,
                })


                localStorage.setItem("LoginId", JSON.stringify(log))
                navigate("/home")
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `Error...`,
                    text: `Something went wrong! `,
                })
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: `Error...`,
                text: `Something went wrong! `,
            })
        }

    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (<>
        <Row style={{ width: '100%', marginTop: '5rem', justifyContent: 'center' }}>
            <Col span={5}>
                <Card hoverable title="Login Form" bordered={true} style={{ backgroundColor: '#888888' }} >
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col >
        </Row>
    </>);

}
export default Login