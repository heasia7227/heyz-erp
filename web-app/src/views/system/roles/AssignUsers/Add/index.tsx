"use client";

import { useState } from "react";
import { Button, message, Modal, Tooltip, Transfer, TransferProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";
import { IGetUnassignUsersParams, IUnassignUser } from "@/interfaces/system/role/assign-users";
import Search from "./Search";

interface IProps {
    roleId: number;
    refresh: () => void;
}

const Add = ({ roleId, refresh }: IProps) => {
    const [messageApi, contextHolder] = message.useMessage();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [targetKeys, setTargetKeys] = useState<TransferProps["targetKeys"]>([]);
    const [selectedKeys, setSelectedKeys] = useState<TransferProps["targetKeys"]>([]);
    const [users, setUsers] = useState<any[]>([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        setSaving(true);
        const result = await httpFetch<boolean>("/system/roles/assign-users", {
            method: "POST",
            body: JSON.stringify({ roleId, userIds: targetKeys }),
        });
        if (result) {
            messageApi.open({
                type: "success",
                content: "分配用户成功！",
            });
            refresh();
            handleCancel();
        } else {
            messageApi.open({
                type: "error",
                content: "分配用户失败！",
            });
        }
        setSaving(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setUsers([]);
        setTargetKeys([]);
        setSelectedKeys([]);
    };

    const onTransferChange: TransferProps["onChange"] = (nextTargetKeys, direction, moveKeys) => {
        // console.log("targetKeys:", nextTargetKeys);
        // console.log("direction:", direction);
        // console.log("moveKeys:", moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onTransferSelectChange: TransferProps["onSelectChange"] = (sourceSelectedKeys, targetSelectedKeys) => {
        // console.log("sourceSelectedKeys:", sourceSelectedKeys);
        // console.log("targetSelectedKeys:", targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const onSearch = (values: IGetUnassignUsersParams) => {
        // console.log("values: ", values);
        getUsers(values || {});
    };

    const getUsers = async (values: IGetUnassignUsersParams) => {
        const result = await httpFetch<IUnassignUser[]>("/system/roles/unassign-users", {
            params: { ...values, roleId },
        });
        const _users = (result || []).map((item: any) => {
            item.key = item.id;
            item.disabled = item.status === "disable";
            return item;
        });
        setUsers(_users);
        setTargetKeys([]);
        setSelectedKeys([]);
    };

    return (
        <>
            {contextHolder}
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                新增用户
            </Button>
            <Modal
                title="新增用户"
                open={isModalOpen}
                okText="保存"
                okButtonProps={{ loading: saving }}
                onOk={handleOk}
                cancelText="取消"
                onCancel={handleCancel}
                cancelButtonProps={{ disabled: saving }}
                closable={!saving}
                width={588}
                destroyOnClose
            >
                <Search onSearch={onSearch} />
                <div className="mt-4">
                    <Transfer
                        dataSource={users}
                        titles={["", "已选用户"]}
                        listStyle={{
                            width: 250,
                            height: 300,
                        }}
                        targetKeys={targetKeys}
                        selectedKeys={selectedKeys}
                        onChange={onTransferChange}
                        onSelectChange={onTransferSelectChange}
                        render={(item) => (
                            <Tooltip title={item.disabled ? "已分配，无需重复分配" : "可分配"}>
                                <span>{item.name}</span>
                            </Tooltip>
                        )}
                    />
                </div>
            </Modal>
        </>
    );
};

export default Add;
