"use client";

import { useEffect, useState } from "react";
import { Divider, Space, Table } from "antd";
import httpFetch from "@/utils/http-fetch";
import Search from "./Search";
import dayjs from "dayjs";
import { IPage } from "@/interfaces";
import { IUser } from "@/interfaces/system/user";

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
        title: "账号",
        dataIndex: "account",
        key: "account",
    },
    {
        title: "创建人",
        dataIndex: "createUserName",
        key: "createUserName",
        width: 120,
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
    const [data, setData] = useState<IPage<IUser[]>>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        setLoading(true);
        const result = await httpFetch<IPage<IUser[]>>("/system/users");
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
