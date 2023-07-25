import { useState } from "react";
import { Button, Form, Input, Modal, Space, Typography, Upload, UploadFile } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { ISupplierPayment } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";

interface IProps {
    isLink?: boolean;
    supplierPayment: ISupplierPayment;
}

const Create = ({ isLink, supplierPayment }: IProps) => {
    const themeController = useThemeController();
    const [form] = Form.useForm();

    const [open, setOpen] = useState<boolean>(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

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
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 },
        },
    };

    return (
        <>
            {isLink ? (
                <Typography.Link onClick={onCreateClick}>
                    <Space size={4}>
                        <PlusOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CREATE]}
                    </Space>
                </Typography.Link>
            ) : (
                <Button icon={<PlusOutlined />} type="primary" onClick={onCreateClick}>
                    {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CREATE]}
                </Button>
            )}
            <Modal
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CREATE]}
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
            >
                <Form {...formItemLayout} form={form} style={{ marginTop: "20px" }}>
                    <Form.Item
                        name="paidAmount"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_PAID_AMOUNT]}
                        rules={[{ required: true }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="notes"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_NOTES]}
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="attachment"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_ATTACHMENT]}
                        rules={[{ required: true }]}
                    >
                        <Upload
                            onRemove={(file) => {
                                const index = fileList.indexOf(file);
                                const newFileList = fileList.slice();
                                newFileList.splice(index, 1);
                                setFileList(newFileList);
                            }}
                            beforeUpload={(file) => {
                                setFileList([...fileList, file]);
                                return false;
                            }}
                            fileList={fileList}
                        >
                            <Button icon={<UploadOutlined />}>
                                {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_SELECT_FILE]}
                            </Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Create;
