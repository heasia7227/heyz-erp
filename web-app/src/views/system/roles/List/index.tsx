"use client";

import { useEffect, useState } from "react";
import { Space, Switch, Table } from "antd";
import dayjs from "dayjs";
import httpFetch from "@/utils/http-fetch";
import { IRole } from "@/interfaces/system/role";
import Search from "./Search";
import ConfigureMenus from "../ConfigureMenus";
import AssignUsers from "../AssignUsers";

const columns = [
    {
        title: "角色名称",
        dataIndex: "title",
        key: "title",
        width: 180,
    },
    {
        title: "角色描述",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "状态",
        key: "status",
        dataIndex: "status",
        width: 150,
        render: (status: string) => (
            <Switch checkedChildren="已启用" unCheckedChildren="已禁用" checked={status === "enable"} />
        ),
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
        render: (_: any, record: IRole) =>
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
        render: (_: any, record: IRole) =>
            record?.updateDate ? dayjs(record?.updateDate).format("YYYY-MM-DD HH:mm:ss") : "-",
    },
    {
        title: "操作",
        key: "action",
        width: 250,
        render: (_: any, record: IRole) => (
            <Space size="middle">
                <a>编辑</a>
                <AssignUsers roleId={record?.id} />
                <ConfigureMenus roleId={record?.id} />
            </Space>
        ),
    },
];

const RoleList = () => {
    const [roles, setRoles] = useState<IRole[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getRoles();
    }, []);

    const getRoles = async (keyword?: string) => {
        setLoading(true);
        const result = await httpFetch<IRole[]>("/system/roles", {
            params: { keyword },
        });
        setRoles(result);
        setLoading(false);
    };

    const onSearch = (keyword: string) => {
        getRoles(keyword);
    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <Search onSearch={onSearch} />
                <Table rowKey={"id"} size="small" bordered columns={columns} dataSource={roles} loading={loading} />
            </div>
        </>
    );
};

export default RoleList;
