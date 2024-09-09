"use client";

import { Button, Form, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

interface IProps {
    onSearch: (keyword: string) => void;
}

const Search = ({ onSearch }: IProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        onSearch(values?.keyword);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="keyword">
                    <Input placeholder="部门模糊查询" autoComplete="off" />
                </Form.Item>
                <div className="flex-1">
                    <Button htmlType="submit" icon={<SearchOutlined />}>
                        查询
                    </Button>
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
