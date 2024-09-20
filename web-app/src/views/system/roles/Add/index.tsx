"use client";

import { useState } from "react";
import { Button, Form, Input, Modal, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

interface IProps {
    refresh: () => void;
}

const Add = ({ refresh }: IProps) => {
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            setSaving(true);
            await httpFetch("/system/roles", {
                method: "POST",
                body: JSON.stringify(values),
            });
            form.resetFields();
            setIsModalOpen(false);
            setSaving(false);
            refresh();
        });
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                新增角色
            </Button>
            <Modal
                title="新增角色"
                open={isModalOpen}
                okText="保存"
                okButtonProps={{ loading: saving }}
                onOk={handleOk}
                cancelText="取消"
                onCancel={handleCancel}
                cancelButtonProps={{ disabled: saving }}
                closable={!saving}
            >
                <Form {...formItemLayout} form={form} style={{ maxWidth: 600 }} initialValues={{ status: true }}>
                    <Form.Item label="角色名称" name="title" rules={[{ required: true, message: "请输入角色名称!" }]}>
                        <Input placeholder="请输入角色名称" />
                    </Form.Item>
                    <Form.Item label="角色描述" name="description">
                        <Input.TextArea placeholder="请输入角色描述" />
                    </Form.Item>
                    <Form.Item label="角色状态" name="status">
                        <Switch checkedChildren="已启用" unCheckedChildren="已禁用" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Add;
