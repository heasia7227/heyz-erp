"use client";

import { useState } from "react";
import { Button, Form, Input, InputNumber, message, Modal, Select, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";
import DepartmentTree from "@/components/DepartmentTree";

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
    const [messageApi, contextHolder] = message.useMessage();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            setSaving(true);
            const result = await httpFetch("/hr/employee-files", {
                method: "POST",
                body: JSON.stringify(values),
            });
            if (result?.id) {
                messageApi.open({
                    type: "success",
                    content: "新增员工成功！",
                });
                form.resetFields();
                setIsModalOpen(false);
                refresh();
            } else {
                messageApi.open({
                    type: "error",
                    content: "新增员工失败！",
                });
            }
            setSaving(false);
        });
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <>
            {contextHolder}
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                新增员工
            </Button>
            <Modal
                title="新增员工"
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
                    <Form.Item
                        label="所属部门"
                        name="departmentId"
                        rules={[{ required: true, message: "请选择部门！" }]}
                    >
                        <DepartmentTree />
                    </Form.Item>
                    <Form.Item label="员工姓名" name="name" rules={[{ required: true, message: "请输入员工姓名！" }]}>
                        <Input placeholder="请输入员工姓名" autoComplete="off" />
                    </Form.Item>
                    <Form.Item
                        label="身份证号"
                        name="idCard"
                        rules={[
                            { required: true, message: "请输入身份证号！" },
                            {
                                pattern:
                                    /^[1-9]\d{5}(18|19|(\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                                message: "请输入正确的身份证号!",
                            },
                        ]}
                    >
                        <Input placeholder="请输入身份证号" autoComplete="off" />
                    </Form.Item>
                    <Form.Item
                        label="手机号"
                        name="phoneNumber"
                        rules={[
                            { required: true, message: "请输入手机号！" },
                            {
                                pattern: /^1\d{10}$/,
                                message: "请输入正确的手机号",
                            },
                        ]}
                    >
                        <Input placeholder="请输入手机号" autoComplete="off" />
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[
                            {
                                type: "email",
                                message: "请输入正确的邮箱！",
                            },
                        ]}
                    >
                        <Input placeholder="请输入邮箱" autoComplete="off" />
                    </Form.Item>
                    <Form.Item label="学历" name="education">
                        <Select
                            placeholder="请选择学历"
                            options={[
                                { value: "小学", label: "小学" },
                                { value: "初中", label: "初中" },
                                { value: "高中", label: "高中" },
                                { value: "专科", label: "专科" },
                                { value: "本科", label: "本科" },
                                { value: "研究生", label: "研究生" },
                                { value: "博士", label: "博士" },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="薪资" name="salary">
                        <InputNumber placeholder="请输入薪资" autoComplete="off" style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="员工状态" name="status">
                        <Switch checkedChildren="已启用" unCheckedChildren="已禁用" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Add;
