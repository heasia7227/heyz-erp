import httpFetch from "@/utils/http-fetch";
import { Form, Input, message, Modal, Radio, Space } from "antd";
import { useState } from "react";

interface IProps {
    record: any;
    refresh?: () => void;
}

const AssignAccount = ({ record, refresh }: IProps) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [showAccountInput, setShowAccountType] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            const params: any = { employeeId: record.id };
            if (values.accountType === 1) {
                params.account = record.phoneNumber;
            } else if (values.accountType === 2) {
                params.account = record.email;
            } else {
                params.account = values.account;
            }

            const result = await httpFetch("/system/users", {
                method: "POST",
                body: JSON.stringify(params),
            });
            console.log("result: ", result);
            if (result?.error) {
                messageApi.open({
                    type: "error",
                    content: result?.message,
                });
            } else {
                messageApi.open({
                    type: "success",
                    content: "分配账号成功！",
                });
                handleCancel();
                refresh?.();
            }
        });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setShowAccountType(false);
        form.resetFields();
    };

    const onValuesChange = (changedValues: any, values: any) => {
        if (changedValues?.accountType) {
            setShowAccountType(changedValues?.accountType === 3);
        }
    };

    return (
        <>
            {contextHolder}
            <a onClick={showModal}>分配账号</a>
            <Modal
                title="分配员工账号"
                open={isModalOpen}
                okText="分配"
                onOk={handleOk}
                cancelText="取消"
                onCancel={handleCancel}
            >
                <Form form={form} onValuesChange={onValuesChange} initialValues={{ accountType: 1 }}>
                    <Form.Item name="accountType" noStyle>
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value={1}>使用【{record?.phoneNumber}】作为账号</Radio>
                                {record?.email && <Radio value={2}>使用【{record?.email}】作为账号</Radio>}
                                <Radio value={3}>自定义账号</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    {showAccountInput && (
                        <Form.Item
                            name="account"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入登录账号",
                                },
                            ]}
                        >
                            <Input placeholder="请输入登录账号" autoComplete="off" />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </>
    );
};

export default AssignAccount;
