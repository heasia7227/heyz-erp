"use client";

import { Space, Table, Tag } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IPage } from "@/interfaces";
import { IRecruitingPlanning } from "@/interfaces/hr/recruiting/planning";
import httpFetch from "@/utils/http-fetch";
import Search from "./Search";
import Details from "./Details";
import AuditingConfig from "./AuditingConfig";

const statusColors: any = {
    draft: { color: "#f5222d", title: "草稿" },
    auditing: { color: "#fa8c16", title: "审核中" },
    awaiting: { color: "#1677ff", title: "待诏聘" },
    cruiting: { color: "#52c41a", title: "招聘中" },
    completed: { color: "#8c8c8c", title: "已完成" },
};

const Planning = () => {
    const [dataScource, setDataScource] = useState<IPage<IRecruitingPlanning[]>>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getPlannings();
    }, []);

    const getPlannings = async (values?: any) => {
        setLoading(true);
        const result = await httpFetch<IPage<IRecruitingPlanning[]>>("/hr/recruiting/plannings", {
            params: values,
        });
        setDataScource(result);
        setLoading(false);
    };

    const onSearch = (values?: any) => {
        getPlannings(values);
    };

    const columns = [
        {
            title: "需求部门",
            dataIndex: "departmentTitle",
            key: "departmentTitle",
            width: 200,
        },
        {
            title: "职位名称",
            dataIndex: "postTitle",
            key: "postTitle",
        },
        {
            title: "学历要求",
            dataIndex: "educationTitle",
            key: "educationTitle",
            width: 100,
        },
        {
            title: "工作经验",
            dataIndex: "experience",
            key: "experience",
            width: 100,
        },
        {
            title: "薪资范围",
            dataIndex: "salariesRange",
            key: "salariesRange",
            width: 150,
        },
        {
            title: "状态",
            dataIndex: "status",
            key: "status",
            width: 100,
            render: (status: string) => {
                const item = statusColors[status];
                return (
                    <>
                        <Tag color={item.color}>{item.title}</Tag>
                    </>
                );
            },
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
            render: (_: any, record: IRecruitingPlanning) =>
                record?.createDate ? dayjs(record?.createDate).format("YYYY-MM-DD HH:mm:ss") : "-",
        },
        // {
        //     title: "修改人",
        //     dataIndex: "updateUserName",
        //     key: "updateUserName",
        //     width: 120,
        // },
        // {
        //     title: "修改时间",
        //     dataIndex: "updateDate",
        //     key: "updateDate",
        //     width: 150,
        //     render: (_: any, record: IRecruitingPlanning) =>
        //         record?.updateDate ? dayjs(record?.updateDate).format("YYYY-MM-DD HH:mm:ss") : "-",
        // },
        {
            title: "操作",
            key: "action",
            width: 200,
            render: (_: any, record: IRecruitingPlanning) => (
                <Space>
                    <Details planning={record} />
                    {record?.status === "draft" && (
                        <>
                            <AuditingConfig planning={record} button={<a>启动</a>} refresh={getPlannings} />
                            <a>编辑</a>
                            <a>删除</a>
                        </>
                    )}
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className="flex flex-col gap-3">
                <Search onSearch={onSearch} />
                <Table
                    rowKey={"id"}
                    size="small"
                    bordered
                    columns={columns}
                    dataSource={dataScource?.items}
                    loading={loading}
                />
            </div>
        </>
    );
};

export default Planning;
