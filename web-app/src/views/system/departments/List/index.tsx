"use client";

import { Space, Table, TableProps, Tag } from "antd";
import Search from "./Search";

interface DataType {
    key: string;
    departmentName: string;
    departmentDescription: string;
    status: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "部门名称",
        dataIndex: "departmentName",
        key: "departmentName",
    },
    {
        title: "部门描述",
        dataIndex: "departmentDescription",
        key: "departmentDescription",
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
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        departmentName: "科技部门",
        departmentDescription: "科技部门描述",
        status: "Disable",
    },
    {
        key: "2",
        departmentName: "销售部门",
        departmentDescription: "销售部门描述",
        status: "Enable",
    },
    {
        key: "3",
        departmentName: "生产部门",
        departmentDescription: "生产部门描述",
        status: "Enable",
    },
];

const DepartmentList = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Search />
                <Table size="small" bordered columns={columns} dataSource={data} />
            </div>
        </>
    );
};

export default DepartmentList;
