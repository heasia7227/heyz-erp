"use client";

import { useEffect, useState } from "react";
import { Button, Form, Input, TreeSelect } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";
import Add from "../Add";

interface IProps {
    onSearch: (values?: any) => void;
}

const Search = ({ onSearch }: IProps) => {
    const [form] = Form.useForm();
    const [departmentTrees, setDepartmentTress] = useState<any>();
    const [departmentId, setDepartmentId] = useState<string>();

    useEffect(() => {
        getDepartments();
    }, []);

    const getDepartments = async () => {
        const result = await httpFetch("/system/departments/trees");
        setDepartmentTress(result);
    };

    const onChange = (newValue: string) => {
        setDepartmentId(newValue);
    };

    const onFinish = (values?: any) => {
        console.log("Finish:", values);
        onSearch(values);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="departmentName">
                    <TreeSelect
                        style={{ width: "180px" }}
                        value={departmentId}
                        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                        placeholder="请选择部门"
                        allowClear
                        treeDefaultExpandAll
                        onChange={onChange}
                        treeData={departmentTrees}
                    />
                </Form.Item>
                <Form.Item name="userName">
                    <Input placeholder="姓名模糊查询" />
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
