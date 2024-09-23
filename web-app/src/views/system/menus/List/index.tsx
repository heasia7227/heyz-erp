"use client";

import { useEffect, useState } from "react";
import { Button, Space, Switch, Table } from "antd";
import * as Icons from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import httpFetch from "@/utils/http-fetch";
import flat2tree from "@/utils/flat2tree";
import { IMenu } from "@/interfaces/system/menu";
import { IBaseTree } from "@/interfaces";

interface ITree extends IBaseTree, IMenu {
    children: ITree[];
}

const getIcon = (iconName: string) => {
    const CustomIcon = (Icons as any)[iconName];
    return <CustomIcon />;
};

const columns = [
    {
        title: "菜单名称",
        dataIndex: "title",
        key: "title",
        width: 200,
        render: (_: any, record: ITree) => {
            return (
                <Space size={"small"}>
                    {record.icon && getIcon(record.icon)}
                    {record.title}
                </Space>
            );
        },
    },
    {
        title: "路径",
        dataIndex: "path",
        key: "path",
    },
    {
        title: "排序",
        dataIndex: "ranking",
        key: "ranking",
        width: 100,
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
        render: (_: any, record: ITree) =>
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
        render: (_: any, record: ITree) =>
            record?.updateDate ? dayjs(record?.updateDate).format("YYYY-MM-DD HH:mm:ss") : "-",
    },
    {
        title: "操作",
        key: "action",
        width: 100,
        render: (_: any, record: ITree) => (
            <Space size="middle">
                <a>编辑</a>
            </Space>
        ),
    },
];

const MenuList = () => {
    const [menuTrees, setMenuTrees] = useState<ITree[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getMenus();
    }, []);

    const getMenus = async () => {
        setLoading(true);
        const result = await httpFetch<IMenu[]>("/system/menus");
        const items = flat2tree<ITree, IMenu>(result, {
            parentKeyColumnName: "parentId",
            keyColumnName: "id",
            titleColumnName: "title",
        });
        setMenuTrees(items);
        setLoading(false);
    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="text-right">
                    <Button type="primary" icon={<PlusOutlined />}>
                        新增菜单
                    </Button>
                </div>
                <Table
                    rowKey={"id"}
                    size="small"
                    bordered
                    columns={columns}
                    dataSource={menuTrees}
                    pagination={false}
                    loading={loading}
                />
            </div>
        </>
    );
};

export default MenuList;
