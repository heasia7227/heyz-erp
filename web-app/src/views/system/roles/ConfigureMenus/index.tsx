"use client";

import { useState } from "react";
import { message, Modal, Tree } from "antd";
import httpFetch from "@/utils/http-fetch";
import flat2tree from "@/utils/flat2tree";

interface IProps {
    roleId: number;
}

const ConfigureMenus = ({ roleId }: IProps) => {
    const [messageApi, contextHolder] = message.useMessage();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);
    const [menuTrees, setMenuTrees] = useState<any[]>([]);
    const [menus, setMenus] = useState<any[]>([]);
    const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

    const showModal = () => {
        setIsModalOpen(true);
        getMenus();
    };

    const getMenus = async () => {
        setLoading(true);
        const _menus = await httpFetch("/system/menus");
        setMenus(_menus);

        const items = flat2tree(_menus, {
            parentKeyColumnName: "parentId",
            keyColumnName: "id",
            titleColumnName: "title",
        });
        setMenuTrees(items);

        const _configuredMenus = await httpFetch("/system/roles/configure-menus", {
            params: { roleId },
        });
        setCheckedKeys(_configuredMenus);
        setLoading(false);
    };

    const onCheck = (checkedKeysValue: any) => {
        setCheckedKeys(checkedKeysValue);
    };

    const handleOk = async () => {
        if (checkedKeys?.length > 0) {
            setSaving(true);
            //去除父级，只要叶子节点
            const menuIds = checkedKeys.filter((key) => menus.find((menu) => menu.id === key)?.path);
            const result = await httpFetch("/system/roles/configure-menus", {
                method: "POST",
                body: JSON.stringify({ roleId, menuIds }),
            });
            if (result) {
                messageApi.open({
                    type: "success",
                    content: "配置菜单成功！",
                });
                setCheckedKeys([]);
                setIsModalOpen(false);
            } else {
                messageApi.open({
                    type: "error",
                    content: "配置菜单失败！",
                });
            }
            setSaving(false);
        } else {
            setIsModalOpen(false);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {contextHolder}
            <a onClick={showModal}>配置菜单</a>
            <Modal
                title="配置菜单"
                open={isModalOpen}
                okText="保存"
                okButtonProps={{ loading: saving }}
                onOk={handleOk}
                cancelText="取消"
                onCancel={handleCancel}
                cancelButtonProps={{ disabled: saving }}
                closable={!saving}
                loading={loading}
            >
                <div className="h-[calc(100vh-250px)] overflow-y-auto">
                    <Tree
                        checkable
                        defaultExpandAll
                        selectable={false}
                        treeData={menuTrees}
                        checkedKeys={checkedKeys}
                        onCheck={onCheck}
                    />
                </div>
            </Modal>
        </>
    );
};

export default ConfigureMenus;
