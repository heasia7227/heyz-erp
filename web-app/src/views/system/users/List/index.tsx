"use client";

import { Space, Table, TableProps, Tag } from "antd";
import Search from "./Search";

interface DataType {
    key: string;
    departmentName: string;
    userId: string;
    userName: string;
    account: string;
    status: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "所属部门",
        dataIndex: "departmentName",
        key: "departmentName",
    },
    {
        title: "用户编号",
        dataIndex: "userId",
        key: "userId",
    },
    {
        title: "用户姓名",
        dataIndex: "userName",
        key: "userName",
    },
    {
        title: "登录账号",
        dataIndex: "account",
        key: "account",
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
                <a>重置密码</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        departmentName: "科技部门",
        userId: "10001",
        userName: "Arthur",
        account: "admin",
        status: "Disable",
    },
    {
        key: "2",
        departmentName: "科技部门",
        userId: "10002",
        userName: "John",
        account: "sys01",
        status: "Enable",
    },
    {
        key: "3",
        departmentName: "科技部门",
        userId: "10003",
        userName: "Jake",
        account: "sys02",
        status: "Enable",
    },
];

const UserList = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Search />
                <Table size="small" bordered columns={columns} dataSource={data} />
            </div>
        </>
    );
};

export default UserList;
