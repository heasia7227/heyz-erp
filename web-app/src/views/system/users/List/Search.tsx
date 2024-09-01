"use client";

import { useState } from "react";
import { Button, Form, Input, TreeSelect, TreeSelectProps } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const treeData = [
    {
        value: "parent 1",
        title: "parent 1",
        children: [
            {
                value: "parent 1-0",
                title: "parent 1-0",
                children: [
                    {
                        value: "leaf1",
                        title: "leaf1",
                    },
                    {
                        value: "leaf2",
                        title: "leaf2",
                    },
                    {
                        value: "leaf3",
                        title: "leaf3",
                    },
                    {
                        value: "leaf4",
                        title: "leaf4",
                    },
                    {
                        value: "leaf5",
                        title: "leaf5",
                    },
                    {
                        value: "leaf6",
                        title: "leaf6",
                    },
                ],
            },
            {
                value: "parent 1-1",
                title: "parent 1-1",
                children: [
                    {
                        value: "leaf11",
                        title: <b style={{ color: "#08c" }}>leaf11</b>,
                    },
                ],
            },
        ],
    },
];

const Search = () => {
    const [form] = Form.useForm();
    const [departmentId, setDepartmentId] = useState<string>();

    const onChange = (newValue: string) => {
        setDepartmentId(newValue);
    };

    const onPopupScroll: TreeSelectProps["onPopupScroll"] = (e) => {
        console.log("onPopupScroll", e);
    };

    const onFinish = (values: any) => {
        console.log("Finish:", values);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item name="departmentName">
                    <TreeSelect
                        style={{ width: "100%" }}
                        value={departmentId}
                        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                        placeholder="请选择部门"
                        allowClear
                        treeDefaultExpandAll
                        onChange={onChange}
                        treeData={treeData}
                        onPopupScroll={onPopupScroll}
                    />
                </Form.Item>
                <Form.Item name="userName">
                    <Input placeholder="姓名模糊查询" />
                </Form.Item>
                <div className="flex-1">
                    <Button icon={<SearchOutlined />}>查询</Button>
                </div>
                <div>
                    <Button type="primary" icon={<PlusOutlined />}>
                        新增用户
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Search;
