"use client";

import { Space, Table, TableProps, Tag } from "antd";
import Search from "./Search";

interface DataType {
    key: string;
    roleName: string;
    roleDescription: string;
    status: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "角色名称",
        dataIndex: "roleName",
        key: "roleName",
    },
    {
        title: "角色描述",
        dataIndex: "roleDescription",
        key: "roleDescription",
    },
    {
        title: "状态",
        key: "status",
        dataIndex: "status",
        render: (_, { status }) => (
            <Tag color={status === "Enable" ? "processing" : "warning"} key={status}>
                {status}
            </Tag>
        ),
    },
    {
        title: "操作",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>编辑</a>
                <a>禁用</a>
                <a>启用</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        roleName: "超级管理员",
        roleDescription: "超级管理员描述",
        status: "Enable",
    },
    {
        key: "2",
        roleName: "普通管理员",
        roleDescription: "普通管理员描述",
        status: "Enable",
    },
    {
        key: "3",
        roleName: "销售人员",
        roleDescription: "销售人员描述",
        status: "Enable",
    },
];

const RoleList = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Search />
                <Table size="small" bordered columns={columns} dataSource={data} />
            </div>
        </>
    );
};

export default RoleList;
