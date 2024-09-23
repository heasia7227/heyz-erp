"use client";

import { useState } from "react";
import { Button, Card, Form, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import aes from "@/utils/aes";
import httpFetch from "@/utils/http-fetch";
import { useRouter } from "next/navigation";
import { ILoginResult } from "@/interfaces/system/user";

const Login = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const [notificationApi, contextHolder] = notification.useNotification();

    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        values.password = aes.encrypt(values.password);
        const result = await httpFetch<ILoginResult>("/system/login", {
            method: "POST",
            body: JSON.stringify(values),
        });
        if (result?.token) {
            localStorage.setItem("token", result?.token);
            localStorage.setItem("user", JSON.stringify(result?.user));
            router.push("/home");
        } else {
            notificationApi.error({
                message: "登录失败",
                description: "账号或密码错误！",
            });
        }

        setLoading(false);
    };

    return (
        <>
            {contextHolder}
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
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="w-full"
                                        loading={loading}
                                        disabled={loading}
                                    >
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
