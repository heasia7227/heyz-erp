"use client";

import { useEffect, useState } from "react";
import { Divider, Space, Switch, Table } from "antd";
import httpFetch from "@/utils/http-fetch";
import Search from "./Search";
import dayjs from "dayjs";

const columns = [
    {
        title: "所属部门",
        dataIndex: "departmentTitle",
        key: "departmentTitle",
    },
    {
        title: "用户姓名",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "出生年月",
        dataIndex: "birthday",
        key: "birthday",
    },
    {
        title: "性别",
        dataIndex: "gender",
        key: "gender",
    },
    {
        title: "手机号",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
    },
    {
        title: "邮件",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "状态",
        key: "status",
        dataIndex: "status",
        render: (status: string) => (
            <Switch checkedChildren="已启用" unCheckedChildren="已禁用" checked={status === "enable"} />
        ),
    },
    {
        title: "创建人",
        dataIndex: "createUserName",
        key: "createUserName",
        width: 120,
        render: (_: any, record: any) => record?.createUser?.name,
    },
    {
        title: "创建时间",
        dataIndex: "createDate",
        key: "createDate",
        width: 150,
        render: (_: any, record: any) =>
            record?.createDate ? dayjs(record?.createDate).format("YYYY-MM-DD HH:mm:ss") : "-",
    },
    {
        title: "修改人",
        dataIndex: "updateUserName",
        key: "updateUserName",
        width: 120,
        render: (_: any, record: any) => record?.updateUser?.name,
    },
    {
        title: "修改时间",
        dataIndex: "updateDate",
        key: "updateDate",
        width: 150,
        render: (_: any, record: any) =>
            record?.updateDate ? dayjs(record?.updateDate).format("YYYY-MM-DD HH:mm:ss") : "-",
    },
    {
        title: "操作",
        key: "action",
        render: (_: any, record: any) => (
            <Space size={0} split={<Divider type="vertical" />}>
                <a>编辑</a>
                <a>分配权限</a>
                <a>重置密码</a>
            </Space>
        ),
    },
];

const UserList = () => {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        setLoading(true);
        const result = await httpFetch("/api/system/users");
        setData(result);
        setLoading(false);
    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <Search />
                <Table
                    size="small"
                    bordered
                    rowKey={"id"}
                    columns={columns}
                    dataSource={data?.items}
                    loading={loading}
                />
            </div>
        </>
    );
};

export default UserList;
