import { useState } from "react";
import { Button, Form, Input, Modal, Space, Typography, Upload, UploadFile } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { ISupplierArchive } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";

interface IProps {
    isLink?: boolean;
    supplierArchive: ISupplierArchive;
}

const Create = ({ isLink, supplierArchive }: IProps) => {
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
                        {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_CREATE]}
                    </Space>
                </Typography.Link>
            ) : (
                <Button icon={<PlusOutlined />} type="primary" onClick={onCreateClick}>
                    {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_CREATE]}
                </Button>
            )}
            <Modal
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_CREATE]}
                open={open}
                onCancel={onCancel}
                onOk={onFinish}
            >
                <Form {...formItemLayout} form={form} style={{ marginTop: "20px" }}>
                    <Form.Item
                        name="id"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_ID]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="title"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_TITLE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="totalPrice"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_TOTAL_PRICE]}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="attachment"
                        label={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_ATTACHMENT]}
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
