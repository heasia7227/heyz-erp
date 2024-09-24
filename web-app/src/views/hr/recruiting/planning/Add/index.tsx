"use client";

import { useState } from "react";
import { Button, Form, Input, InputNumber, message, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EducationSelect from "@/components/EducationSelect";
import httpFetch from "@/utils/http-fetch";
import { IRecruitingPlanning } from "@/interfaces/hr/recruiting/planning";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
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

        const user = JSON.parse(localStorage.getItem("user") || "{}");
        form.setFieldsValue({
            departmentId: user.departmentId,
            departmentTitle: user.departmentTitle,
            recruitingNum: 1,
        });
    };

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            setSaving(true);
            const result = await httpFetch<IRecruitingPlanning>("/hr/recruiting/plannings", {
                method: "POST",
                body: JSON.stringify(values),
            });
            if (result?.id) {
                messageApi.open({
                    type: "success",
                    content: "新增计划成功！",
                });
                form.resetFields();
                setIsModalOpen(false);
                refresh();
            } else {
                messageApi.open({
                    type: "error",
                    content: "新增计划失败！",
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
                新增计划
            </Button>
            <Modal
                title="新增计划"
                open={isModalOpen}
                okText="保存"
                okButtonProps={{ loading: saving }}
                onOk={handleOk}
                cancelText="取消"
                onCancel={handleCancel}
                cancelButtonProps={{ disabled: saving }}
                closable={!saving}
                destroyOnClose
            >
                <Form {...formItemLayout} form={form}>
                    <Form.Item label="需求部门" name="departmentId" noStyle>
                        <Input style={{ display: "none" }} />
                    </Form.Item>
                    <Form.Item label="需求部门" name="departmentTitle">
                        <Input readOnly />
                    </Form.Item>
                    <Form.Item
                        label="职位名称"
                        name="postTitle"
                        rules={[{ required: true, message: "请输入职位名称！" }]}
                    >
                        <Input placeholder="请输入职位名称" />
                    </Form.Item>
                    <Form.Item
                        label="职位详情"
                        name="postInfo"
                        rules={[{ required: true, message: "请输入职位详情！" }]}
                    >
                        <Input.TextArea rows={6} placeholder="请输入职位详情" />
                    </Form.Item>
                    <Form.Item label="学历要求" name="education">
                        <EducationSelect />
                    </Form.Item>
                    <Form.Item label="工作经验" name="experience">
                        <Input placeholder="例如：5年" />
                    </Form.Item>
                    <Form.Item label="薪资范围" name="salariesRange">
                        <Input placeholder="请输入薪资范围" />
                    </Form.Item>
                    <Form.Item label="技术要求" name="technology">
                        <Input placeholder="请输入技术要求" />
                    </Form.Item>
                    <Form.Item
                        label="招聘人数"
                        name="recruitingNum"
                        rules={[{ required: true, message: "请输入招聘人数！" }]}
                    >
                        <InputNumber placeholder="请输入招聘人数" max={100000} min={1} style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="招聘理由" name="reason" rules={[{ required: true, message: "请输入招聘理由！" }]}>
                        <Input.TextArea placeholder="请输入招聘理由" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Add;
