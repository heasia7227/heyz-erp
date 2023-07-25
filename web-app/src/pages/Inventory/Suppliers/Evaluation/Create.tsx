import { ISupplierEvaluation } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Typography } from "antd";
import { useState } from "react";

interface IProps {
    isLink?: boolean;
    supplierEvaluation: ISupplierEvaluation;
}

const Create = ({ isLink, supplierEvaluation }: IProps) => {
    const themeController = useThemeController();
    const [form] = Form.useForm();

    const [open, setOpen] = useState<boolean>(false);

    const onCreateClick = () => {
        setOpen(true);
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
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    return (
        <>
            {isLink ? (
                <Typography.Link onClick={onCreateClick}>
                    <Space size={4}>
                        <PlusOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_CREATE]}
                    </Space>
                </Typography.Link>
            ) : (
                <Button icon={<PlusOutlined />} type="primary" onClick={onCreateClick}>
                    {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_CREATE]}
                </Button>
            )}
            <Modal
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_CREATE]}
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
            >
                <Form {...formItemLayout} form={form} style={{ marginTop: "20px" }}>
                    <Form.Item
                        name="score"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_SCORE]}
                        rules={[{ required: true }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="notes"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_NOTES]}
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Create;
