"use client";

import { Space, Table } from "antd";

const columns = [
    {
        title: "需求部门",
        dataIndex: "departmentName",
        key: "departmentName",
        width: 200,
    },
    {
        title: "职位名称",
        dataIndex: "postTitle",
        key: "postTitle",
    },
    {
        title: "学历要求",
        dataIndex: "education",
        key: "education",
        width: 120,
    },
    {
        title: "工作经验",
        dataIndex: "experience",
        key: "experience",
        width: 120,
    },
    {
        title: "薪资范围",
        dataIndex: "salariesRange",
        key: "salariesRange",
        width: 120,
    },
    {
        title: "候选人",
        children: [
            {
                title: "姓名",
                dataIndex: "candidateName",
                key: "candidateName",
                width: 80,
            },
            {
                title: "性别",
                dataIndex: "candidateGender",
                key: "candidateGender",
                width: 60,
            },
            {
                title: "年龄",
                dataIndex: "candidateAge",
                key: "candidateAge",
                width: 80,
            },
            {
                title: "手机",
                dataIndex: "candidatePhoneNumber",
                key: "candidatePhoneNumber",
                width: 150,
            },
        ],
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
        width: 200,
    },
    {
        title: "操作",
        key: "action",
        width: 100,
        render: (_: any, record: any) => (
            <Space>
                <a>详情</a>
                <a>标记</a>
            </Space>
        ),
    },
];

const Resume = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Table rowKey={"id"} size="small" bordered columns={columns} dataSource={[]} />
            </div>
        </>
    );
};

export default Resume;
