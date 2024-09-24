"use client";

import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DepartmentTree from "@/components/DepartmentTree";
import Add from "./Add";

interface IProps {
    onSearch: (values?: any) => void;
}

const Search = ({ onSearch }: IProps) => {
    const [form] = Form.useForm();

    const onFinish = (values?: any) => {
        console.log("Finish:", values);
        onSearch(values);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="departmentId">
                    <DepartmentTree />
                </Form.Item>
                <Form.Item name="postTitle">
                    <Input placeholder="职位名称模糊查询" />
                </Form.Item>
                <div className="flex-1">
                    <Button icon={<SearchOutlined />}>查询</Button>
                </div>
                <div>
                    <Add refresh={() => onFinish()} />
                </div>
            </Form>
        </>
    );
};

export default Search;
