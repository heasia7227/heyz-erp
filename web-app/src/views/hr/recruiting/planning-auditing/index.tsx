"use client";

import { IPage } from "@/interfaces";
import { IRecruitingPlanningPendingAuditing } from "@/interfaces/hr/recruiting/planning/pending/auditing";
import httpFetch from "@/utils/http-fetch";
import { Space, Table, Tag } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Search from "./Search";
import Details from "../planning/Details";

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
        dataIndex: "auditStatus",
        key: "auditStatus",
        width: 100,
        render: (auditStatus: any, record: IRecruitingPlanningPendingAuditing) => {
            if (auditStatus === "agreed") {
                return <Tag color="#52c41a">通过</Tag>;
            } else if (auditStatus === "rejected") {
                return <Tag color="#f5222d">驳回</Tag>;
            } else if (record.isActive === "active") {
                return <Tag color="#fa8c16">待审批</Tag>;
            } else {
                return <>-</>;
            }
        },
    },
    {
        title: "审批意见",
        dataIndex: "opinion",
        key: "opinion",
        width: 300,
    },
    {
        title: "审批时间",
        dataIndex: "auditDate",
        key: "auditDate",
        width: 150,
        render: (_: any, record: IRecruitingPlanningPendingAuditing) =>
            record?.auditDate ? dayjs(record?.auditDate).format("YYYY-MM-DD HH:mm:ss") : "-",
    },
    {
        title: "操作",
        key: "action",
        width: 100,
        render: (_: any, record: IRecruitingPlanningPendingAuditing) => (
            <Space>
                <Details planning={record} />
                <a>审批</a>
            </Space>
        ),
    },
];

const PlanningAuditing = () => {
    const [dataScource, setDataScource] = useState<IPage<IRecruitingPlanningPendingAuditing[]>>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getPendingAuditings();
    }, []);

    const getPendingAuditings = async (values?: any) => {
        setLoading(true);
        const result = await httpFetch<IPage<IRecruitingPlanningPendingAuditing[]>>(
            "/hr/recruiting/plannings/pending/auditing"
        );
        setDataScource(result);
        setLoading(false);
    };

    const onSearch = () => {
        getPendingAuditings();
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
                    dataSource={dataScource?.items}
                    loading={loading}
                />
            </div>
        </>
    );
};

export default PlanningAuditing;
