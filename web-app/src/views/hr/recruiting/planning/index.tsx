"use client";

import { Space, Table } from "antd";
import dayjs from "dayjs";

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
        title: "状态",
        dataIndex: "status",
        key: "status",
        width: 100,
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
        render: (_: any, record: any) => (
            <Space>
                <a>详情</a>
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];

const Planning = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Table rowKey={"id"} size="small" bordered columns={columns} dataSource={[]} />
            </div>
        </>
    );
};

export default Planning;
