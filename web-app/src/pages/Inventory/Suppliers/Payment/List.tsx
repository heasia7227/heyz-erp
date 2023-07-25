import { Col, Divider, Modal, Row, Space, Table, Typography } from "antd";
import { ISupplierPayment, ISupplierPaymentRecords } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { DeleteOutlined, DownloadOutlined, EyeOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { supplierService } from "@/services/inventory/supplierService";
import styled from "styled-components";
import Create from "./Create";

interface IProps {
    supplierPayment: ISupplierPayment;
}

const List = ({ supplierPayment }: IProps) => {
    const themeController = useThemeController();
    const [open, setOpen] = useState<boolean>(false);
    const [paymentRecords, setPaymentRecords] = useState<ISupplierPaymentRecords>();

    const onCancel = () => {
        setOpen(false);
    };

    const onClick = () => {
        setOpen(true);
        getPaymentRecords();
    };

    const getPaymentRecords = async () => {
        const result = await supplierService.getPaymentRecords();
        setPaymentRecords(result);
    };

    const columns = [
        {
            title: "#",
            key: "serialNumber",
            render: (text: any, record: any, index: number) => index + 1,
            width: 40,
            align: "center" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_PAID_AMOUNT],
            dataIndex: "paidAmount",
            key: "paidAmount",
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_NOTES],
            dataIndex: "notes",
            key: "notes",
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            render: (text: any, record: any) => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Typography.Link>
                                <Space size={4}>
                                    <EyeOutlined />
                                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_PREVIEW]}
                                </Space>
                            </Typography.Link>
                            <Typography.Link>
                                <Space size={4}>
                                    <DownloadOutlined />
                                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_DOWNLOAD]}
                                </Space>
                            </Typography.Link>
                            <Typography.Link>
                                <Space size={4}>
                                    <DeleteOutlined />
                                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_REMOVE]}
                                </Space>
                            </Typography.Link>
                        </Space>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Typography.Link onClick={onClick}>
                <Space size={4}>
                    <MenuOutlined />
                    {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_LIST]}
                </Space>
            </Typography.Link>
            <Modal
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_LIST]}
                open={open}
                onCancel={onCancel}
                footer={null}
                width={1000}
                getContainer={document.getElementById("theme")!}
            >
                <Row style={{ marginBottom: "10px", justifyContent: "right" }}>
                    <Col style={{ flex: 1, display: "flex", gap: 16 }}>
                        <Statistic>
                            <span>
                                {
                                    themeController.languagePack?.[
                                        LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CONTRACT_TOTAL_PRICE
                                    ]
                                }
                                :
                            </span>
                            <span>{paymentRecords?.contractTotalPrice}</span>
                        </Statistic>
                        <Statistic>
                            <span>
                                {
                                    themeController.languagePack?.[
                                        LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_PAID_TOTAL_PRICE
                                    ]
                                }
                                :
                            </span>
                            <span>{paymentRecords?.paidTotalPrice}</span>
                        </Statistic>
                    </Col>
                    <Col>
                        <Create supplierPayment={supplierPayment} />
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    dataSource={paymentRecords?.paymentRecords}
                    bordered
                    size="small"
                    rowKey="id"
                    pagination={{
                        total: paymentRecords?.total,
                        pageSize: paymentRecords?.pageSize,
                        current: paymentRecords?.current,
                        size: "default",
                    }}
                />
            </Modal>
        </>
    );
};

export default List;

const Statistic = styled.div`
    background-color: #edeff2;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 4px;
    & > span:not(:first-child) {
        margin-left: 8px;
        font-weight: bold;
    }
`;
