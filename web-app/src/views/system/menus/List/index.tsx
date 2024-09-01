"use client";

import { Space, Table, TableProps, Tag } from "antd";
import Search from "./Search";

interface DataType {
    key: string;
    menuName: string;
    menuDescription: string;
    status: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "菜单名称",
        dataIndex: "menuName",
        key: "menuName",
    },
    {
        title: "菜单描述",
        dataIndex: "menuDescription",
        key: "menuDescription",
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
        menuName: "项目管理",
        menuDescription: "项目管理描述",
        status: "Enable",
    },
    {
        key: "2",
        menuName: "销售管理",
        menuDescription: "销售管理描述",
        status: "Enable",
    },
    {
        key: "3",
        menuName: "财务管理",
        menuDescription: "财务管理描述",
        status: "Enable",
    },
];

const MenuList = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Search />
                <Table size="small" bordered columns={columns} dataSource={data} />
            </div>
        </>
    );
};

export default MenuList;
