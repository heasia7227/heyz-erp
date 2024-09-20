"use client";

import { useEffect, useState } from "react";
import { Button, Form, Input, TreeSelect } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";
import Add from "./Add";

interface IProps {
    roleId: number;
    onSearch: (values: any) => void;
}

const Search = ({ roleId, onSearch }: IProps) => {
    const [form] = Form.useForm();
    const [departmentTrees, setDepartmentTress] = useState<any>();

    useEffect(() => {
        getDepartments();
    }, []);

    const getDepartments = async () => {
        const result = await httpFetch("/system/departments/trees");
        setDepartmentTress(result);
    };

    const onFinish = (values: any) => {
        console.log("Finish:", values);
        onSearch(values);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="departmentId">
                    <TreeSelect
                        style={{ width: "180px" }}
                        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                        placeholder="请选择部门"
                        allowClear
                        treeDefaultExpandAll
                        treeData={departmentTrees}
                    />
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
                    <Add roleId={roleId} />
                </div>
            </Form>
        </>
    );
};

export default Search;
