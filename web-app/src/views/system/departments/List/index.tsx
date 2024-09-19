"use client";

import { useEffect, useState } from "react";
import { Switch, Table } from "antd";
import dayjs from "dayjs";
import httpFetch from "@/utils/http-fetch";
import Search from "./Search";

const columns = [
    {
        title: "部门名称",
        dataIndex: "title",
        key: "title",
        width: 200,
    },
    {
        title: "部门描述",
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
        width: 100,
        render: (_: any, record: any) => <a>编辑</a>,
    },
];

const DepartmentList = () => {
    const [departmentTrees, setDepartmentTress] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getDepartments();
    }, []);

    const getDepartments = async (keyword?: string) => {
        setLoading(true);
        const result = await httpFetch("/system/departments/trees", {
            params: { keyword },
        });
        setDepartmentTress(result);
        setLoading(false);
    };

    const onSearch = (keyword: string) => {
        getDepartments(keyword);
    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <Search onSearch={onSearch} />
                <Table
                    rowKey={"id"}
                    size="small"
                    bordered
                    columns={columns}
                    dataSource={departmentTrees}
                    loading={loading}
                />
            </div>
        </>
    );
};

export default DepartmentList;
