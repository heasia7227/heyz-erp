"use client";

import { useEffect, useState } from "react";
import { Button, Form, Input, TreeSelect, TreeSelectProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";

const Search = () => {
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
