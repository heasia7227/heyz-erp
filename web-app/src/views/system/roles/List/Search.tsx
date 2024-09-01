"use client";

import { Button, Form, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const Search = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Finish:", values);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="userName">
                    <Input placeholder="角色模糊查询" />
                </Form.Item>
                <div className="flex-1">
                    <Button icon={<SearchOutlined />}>查询</Button>
                </div>
                <div>
                    <Button type="primary" icon={<PlusOutlined />}>
                        新增部门
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Search;
