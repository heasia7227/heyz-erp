"use client";

import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DepartmentTree from "@/components/DepartmentTree";

const Search = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Finish:", values);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="departmentId">
                    <DepartmentTree />
                </Form.Item>
                <Form.Item name="userName">
                    <Input placeholder="姓名模糊查询" />
                </Form.Item>
                <div className="flex-1">
                    <Button icon={<SearchOutlined />}>查询</Button>
                </div>
                {/* <div>
                    <Button type="primary" icon={<PlusOutlined />}>
                        新增用户
                    </Button>
                </div> */}
            </Form>
        </>
    );
};

export default Search;
