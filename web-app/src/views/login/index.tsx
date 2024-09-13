"use client";

import { Button, Card, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import aes from "@/utils/aes";
import httpFetch from "@/utils/http-fetch";

const Login = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        values.password = aes.encrypt(values.password);
        console.log("Success:", values);
        const result = await httpFetch("/api/system/login", {
            method: "POST",
            body: JSON.stringify(values),
        });
        console.log("result:", result);
    };

    return (
        <>
            <div className="h-screen bg-gradient-to-br from-cyan-100 to-blue-300">
                <div className="w-[1366px] mx-auto relative">
                    <div className="w-[300px] absolute top-80 right-0">
                        <Card size="small">
                            <div className="text-center mb-4 text-lg">欢迎登录He Yazhou ERP</div>
                            <Form form={form} initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                                <Form.Item name="username" rules={[{ required: true, message: "请输入账号!" }]}>
                                    <Input prefix={<UserOutlined />} placeholder="15398027227" />
                                </Form.Item>

                                <Form.Item name="password" rules={[{ required: true, message: "请输入密码!" }]}>
                                    <Input.Password prefix={<LockOutlined />} placeholder="123456" />
                                </Form.Item>

                                <div>
                                    <Button type="primary" htmlType="submit" className="w-full">
                                        登录
                                    </Button>
                                </div>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
