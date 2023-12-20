import { ISupplierArchive } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Typography } from "antd";
import { useState } from "react";

interface IProps {
    isEdit?: boolean;
    supplierArchive?: ISupplierArchive;
}

const Create = ({ isEdit, supplierArchive }: IProps) => {
    const themeController = useThemeController();
    const [form] = Form.useForm();

    const [open, setOpen] = useState<boolean>(false);

    const onCreateClick = () => {
        setOpen(true);
    };

    const onEditClick = () => {
        setOpen(true);
        form.setFieldsValue(supplierArchive);
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

    console.log("isEdit: ", isEdit);

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
                        ? themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_EDIT]
                        : themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CREATE]
                }
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
            >
                <Form {...formItemLayout} form={form} style={{ marginTop: "20px" }}>
                    <Form.Item
                        name="title"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_TITLE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="responsiblePerson"
                        label={
                            themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_RESPONSIBLE_PERSON]
                        }
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_GENDER]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="contactNumber"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CONTACT_NUMBER]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_ADDRESS]}
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
