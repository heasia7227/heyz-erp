"use client";

import { useState } from "react";
import { Divider, Modal, Space, Table } from "antd";
import dayjs from "dayjs";
import httpFetch from "@/utils/http-fetch";
import { TableRowSelection } from "antd/es/table/interface";
import Search from "./Search";
import { IAssignUser, IGetAssignUsersParams } from "@/interfaces/system/role/assign-users";

const columns = [
    {
        title: "所属部门",
        dataIndex: "departmentTitle",
        key: "departmentTitle",
    },
    {
        title: "用户姓名",
        dataIndex: "name",
        key: "name",
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
        render: (_: any, record: IAssignUser) =>
            record?.createDate ? dayjs(record?.createDate).format("YYYY-MM-DD HH:mm:ss") : "-",
    },
    {
        title: "操作",
        key: "action",
        width: 80,
        render: (_: any, record: IAssignUser) => (
            <Space size={0} split={<Divider type="vertical" />}>
                <a>删除</a>
            </Space>
        ),
    },
];

interface IProps {
    roleId: number;
}

const AssignUsers = ({ roleId }: IProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<IAssignUser[]>([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const showModal = () => {
        setIsModalOpen(true);
        getUsers({} as IGetAssignUsersParams);
    };

    const getUsers = async (values: IGetAssignUsersParams) => {
        setLoading(true);
        const _users = await httpFetch<IAssignUser[]>("/system/roles/assign-users", {
            params: { ...values, roleId },
        });
        setUsers(_users);
        setLoading(false);
    };

    const onSearch = (values: IGetAssignUsersParams) => {
        getUsers(values || {});
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<IAssignUser> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <>
            <a onClick={showModal}>分配用户</a>
            <Modal title="已分配用户列表" open={isModalOpen} onCancel={handleCancel} footer={null} width={900}>
                <div>
                    <Search roleId={roleId} onSearch={onSearch} />
                    <div className="mt-4">
                        <Table
                            rowKey={"userId"}
                            size="small"
                            bordered
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={users}
                            loading={loading}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AssignUsers;
