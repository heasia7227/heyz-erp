"use client";

import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DepartmentTree from "@/components/DepartmentTree";

interface IProps {
    onSearch: (values: IGetUnassignUsersParams) => void;
}

const Search = ({ onSearch }: IProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: IGetUnassignUsersParams) => {
        onSearch(values);
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
                <div>
                    <Button htmlType="submit" icon={<SearchOutlined />}>
                        查询
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Search;
