import { useState } from "react";
import { Button, Form, Input, Modal, Space, TreeSelect, Typography } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IWarehouse } from "@/interfaces/inventory/IWarehouse";

interface IProps {
    isEdit?: boolean;
    warehouse?: IWarehouse;
}

const Create = ({ isEdit, warehouse }: IProps) => {
    const themeController = useThemeController();
    const [form] = Form.useForm();

    const [open, setOpen] = useState<boolean>(false);

    const onCreateClick = () => {
        setOpen(true);
    };

    const onEditClick = () => {
        setOpen(true);
        form.setFieldsValue(warehouse);
    };

    const onCancel = () => {
        setOpen(false);
    };

    const onFinish = () => {
        form.validateFields()
            .then((values) => {
                console.log("Received values of form: ", values);
            })
            .catch((errorInfo) => {
                console.log(errorInfo);
            });
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 },
        },
    };

    return (
        <>
            {isEdit ? (
                <Typography.Link onClick={onEditClick}>
                    <Space size={4}>
                        <EditOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_EDIT]}
                    </Space>
                </Typography.Link>
            ) : (
                <Button icon={<PlusOutlined />} type="primary" onClick={onCreateClick}>
                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_CREATE]}
                </Button>
            )}
            <Modal
                title={
                    isEdit
                        ? themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_EDIT]
                        : themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_CREATE]
                }
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
            >
                <Form {...formItemLayout} form={form} style={{ marginTop: "20px" }}>
                    <Form.Item
                        name="name"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_TITLE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="department"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_DEPARTMENT]}
                        rules={[{ required: true }]}
                    >
                        <TreeSelect></TreeSelect>
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ADDRESS]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="position"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_POSITION]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="level"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_LEVEL]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="administrator"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ADMINISTRATOR]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="contactNumber"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_CONTACT_NUMBER]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Create;
