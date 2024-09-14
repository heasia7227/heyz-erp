import { useState } from "react";
import { Button, Form, Input, Modal, Switch, TreeSelect } from "antd";
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
    const [departmentTrees, setDepartmentTress] = useState<any>();

    const getDepartments = async () => {
        const result = await httpFetch("/system/departments/trees");
        setDepartmentTress(result);
    };

    const showModal = () => {
        getDepartments();
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            setSaving(true);
            await httpFetch("/system/departments", {
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
                新增部门
            </Button>
            <Modal
                title="新增部门"
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
                    <Form.Item label="上级部门" name="parentId">
                        <TreeSelect
                            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                            placeholder="请选择部门"
                            allowClear
                            treeDefaultExpandAll
                            treeData={departmentTrees}
                        />
                    </Form.Item>
                    <Form.Item label="部门名称" name="title" rules={[{ required: true, message: "请输入部门名称!" }]}>
                        <Input placeholder="请输入部门名称" />
                    </Form.Item>
                    <Form.Item label="部门描述" name="description">
                        <Input.TextArea placeholder="请输入部门描述" />
                    </Form.Item>
                    <Form.Item label="部门状态" name="status">
                        <Switch checkedChildren="已启用" unCheckedChildren="已禁用" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Add;
