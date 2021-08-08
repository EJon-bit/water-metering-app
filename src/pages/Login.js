import { Card, Col, Form, Input, Button, Row} from 'antd';

import { UserOutlined, LockOutlined} from '@ant-design/icons';
import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login=(props)=>{
    const { setAuthenticated } = useContext(AuthContext);

    const onFinish = (values) =>{

        setAuthenticated(true);
        props.history.push('/');

    }

    return(
        <div id="loginBackground">
            <Card id="loginCard" title={<Row justify="center">HallTech IoT Water Meter</Row>}>
                <Row justify="center">
                    <Col lg={6} xs={20}>
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                            <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"/>
                            </Form.Item> 
                                        
                            <Form.Item>
                                <Row justify="center">
                                    <Button id="loginButton" type="primary" htmlType="submit" className="login-form-button">
                                        Login
                                    </Button>
                                </Row>                        
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>               
            </Card>
        </div>       
    )
}

export default Login