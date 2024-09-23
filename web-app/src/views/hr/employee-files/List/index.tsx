"use client";

import httpFetch from "@/utils/http-fetch";
import { Space, Switch, Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Search from "./Search";
import AssignAccount from "../AssignAccount";
import { IEmployeeFile } from "@/interfaces/hr/employee-file";
import { IPage } from "@/interfaces";

const EmployeeFiles = () => {
    const [dataScource, setDataScource] = useState<IPage<IEmployeeFile[]>>();

    useEffect(() => {
        getEmployeeFiles();
    }, []);

    const getEmployeeFiles = async (values?: any) => {
        const result = await httpFetch<IPage<IEmployeeFile[]>>("/hr/employee-files", {
            params: values,
        });
        setDataScource(result);
    };

    const onSearch = (values?: any) => {
        getEmployeeFiles(values);
    };

    const columns = [
        {
            title: "所属部门",
            dataIndex: "departmentTitle",
            key: "departmentTitle",
            width: 200,
        },
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            width: 120,
        },
        {
            title: "性别",
            dataIndex: "gender",
            key: "gender",
            width: 80,
        },
        {
            title: "生日",
            dataIndex: "birthday",
            key: "birthday",
            width: 120,
        },
        {
            title: "手机号",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            width: 120,
        },
        {
            title: "状态",
            key: "status",
            dataIndex: "status",
            width: 100,
            render: (status: string) => (
                <Switch checkedChildren="已启用" unCheckedChildren="已禁用" checked={status === "enable"} />
            ),
        },
        {
            title: "分配账号",
            dataIndex: "actions",
            key: "actions",
            width: 150,
            render: (_: any, record: IEmployeeFile) =>
                record?.assigned === "1" ? (
                    record?.account
                ) : (
                    <AssignAccount record={record} refresh={() => onSearch()} />
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
            render: (_: any, record: IEmployeeFile) =>
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
            render: (_: any, record: IEmployeeFile) =>
                record?.updateDate ? dayjs(record?.updateDate).format("YYYY-MM-DD HH:mm:ss") : "-",
        },
        {
            title: "操作",
            key: "action",
            width: 100,
            render: (_: any, record: IEmployeeFile) => (
                <Space>
                    <a>详情</a>
                    <a>编辑</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className="flex flex-col gap-3">
                <Search onSearch={onSearch} />
                <Table rowKey={"id"} size="small" bordered columns={columns} dataSource={dataScource?.items} />
            </div>
        </>
    );
};

export default EmployeeFiles;
