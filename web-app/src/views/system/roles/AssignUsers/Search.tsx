"use client";

import { useState } from "react";
import { Button, Form, Input } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import DepartmentTree from "@/components/DepartmentTree";
import Add from "./Add";
import { IGetAssignUsersParams } from "@/interfaces/system/role/assign-users";

interface IProps {
    roleId: number;
    onSearch: (values: IGetAssignUsersParams) => void;
}

const Search = ({ roleId, onSearch }: IProps) => {
    const [form] = Form.useForm();
    const [searchForm, setSearchForm] = useState<IGetAssignUsersParams>({} as IGetAssignUsersParams);

    const onFinish = (values: IGetAssignUsersParams) => {
        // console.log("Finish:", values);
        onSearch(values);
        setSearchForm(values);
    };

    const refresh = () => {
        onSearch(searchForm);
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
                    <Button htmlType="submit" icon={<SearchOutlined />}>
                        查询
                    </Button>
                </div>
                <div>
                    <Button ghost danger icon={<DeleteOutlined />}>
                        批量删除
                    </Button>
                </div>
                <div className="ml-4">
                    <Add roleId={roleId} refresh={refresh} />
                </div>
            </Form>
        </>
    );
};

export default Search;
