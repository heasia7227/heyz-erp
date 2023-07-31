import { Button, Form, Input, Modal, Space, TreeSelect, Typography } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { useThemeController } from "@/theme";
import { useState } from "react";
import { IMaterial } from "@/interfaces/inventory/IMaterials";

interface IProps {
    isEdit?: boolean;
    materialInfo?: IMaterial;
}

const Create = ({ isEdit, materialInfo }: IProps) => {
    const themeController = useThemeController();
    const [form] = Form.useForm();
    const [open, setOpen] = useState<boolean>(false);

    const onCreateClick = () => {
        setOpen(true);
    };

    const onEditClick = () => {
        setOpen(true);
        form.setFieldsValue(materialInfo);
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

    const enFormItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

    const zhFormItemLayout = {
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
                        ? themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_EDIT]
                        : themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CREATE]
                }
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
                width={600}
            >
                <Form
                    {...(themeController.language === "English" ? enFormItemLayout : zhFormItemLayout)}
                    form={form}
                    style={{ marginTop: "20px" }}
                >
                    <Form.Item
                        name="name"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_NAME]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CODE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="categoryId"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CATEGORY]}
                        rules={[{ required: true }]}
                    >
                        <TreeSelect></TreeSelect>
                    </Form.Item>
                    <Form.Item
                        name="departmentId"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_DEPARTMENT]}
                        rules={[{ required: true }]}
                    >
                        <TreeSelect></TreeSelect>
                    </Form.Item>
                    <Form.Item
                        name="regularMaintenanceFrequency"
                        label={
                            themeController.languagePack?.[
                                LANGUAGE_KEYS.INVENTORY_MATERIAL_REGULAR_MAINTENANCE_FREQUENCY
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Create;
