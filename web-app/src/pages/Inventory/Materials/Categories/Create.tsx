import { Button, Form, Input, Modal, Select, Space, Typography } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { useState } from "react";
import { IMaterialsCategory } from "@/interfaces/inventory/IMaterials";

interface IProps {
    isEdit?: boolean;
    categoryInfo?: IMaterialsCategory;
}

const Create = ({ isEdit, categoryInfo }: IProps) => {
    const themeController = useThemeController();
    const [form] = Form.useForm();

    const [open, setOpen] = useState<boolean>(false);

    const onCreateClick = () => {
        setOpen(true);
    };

    const onEditClick = () => {
        setOpen(true);
        form.setFieldsValue(categoryInfo);
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
                        ? themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_EDIT_CATEGORY]
                        : themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CREATE_CATEGORY]
                }
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
            >
                <Form {...formItemLayout} form={form} style={{ marginTop: "20px" }}>
                    <Form.Item
                        name="title"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_TITLE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_CODE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="parentId"
                        label={`${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_PARENT_CATEGORY]}`}
                    >
                        <Select></Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Create;
