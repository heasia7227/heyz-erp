import { useEffect, useState } from "react";
import { Col, Divider, Input, Row, Space, Table } from "antd";
import { ISupplierPayments } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { supplierService } from "@/services/inventory/supplierService";
import List from "./List";
import Create from "./Create";

const { Search } = Input;

const Payment = () => {
    const themeController = useThemeController();
    const [payments, setPayments] = useState<ISupplierPayments>();

    useEffect(() => {
        getPayments();
    }, []);

    const getPayments = async () => {
        const result = await supplierService.getPayments();
        setPayments(result);
    };

    const columns = [
        {
            title: "#",
            key: "serialNumber",
            render: (text: any, record: any, index: number) => index + 1,
            width: 40,
            align: "center" as const,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_TITLE],
            dataIndex: "title",
            key: "title",
            width: 350,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CONTRACT_TOTAL_PRICE],
            dataIndex: "contractTotalPrice",
            key: "contractTotalPrice",
            width: 100,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_PAID_TOTAL_PRICE],
            dataIndex: "paidTotalPrice",
            key: "paidTotalPrice",
            width: 100,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_RESPONSIBLE_PERSON],
            dataIndex: "responsiblePerson",
            key: "responsiblePerson",
            width: 100,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_GENDER],
            dataIndex: "gender",
            key: "gender",
            width: 80,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CONTACT_NUMBER],
            dataIndex: "contactNumber",
            key: "contactNumber",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_ADDRESS],
            dataIndex: "address",
            key: "address",
            width: 400,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CREATE_DATE_TIME],
            dataIndex: "createDateTime",
            key: "createDateTime",
            width: 180,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            width: 280,
            fixed: "right" as const,
            render: (text: any, record: any) => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <List supplierPayment={record} />
                            <Create isLink supplierPayment={record} />
                        </Space>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Row style={{ marginBottom: "10px" }}>
                <Col style={{ flex: 1 }}>
                    <Search
                        placeholder={`${
                            themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_TITLE]
                        }/${
                            themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_RESPONSIBLE_PERSON]
                        }/${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CONTACT_NUMBER]}`}
                        style={{ width: 500 }}
                    />
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={payments?.payments}
                bordered
                size="small"
                rowKey="id"
                scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                pagination={{
                    total: payments?.total,
                    pageSize: payments?.pageSize,
                    current: payments?.current,
                    size: "default",
                }}
            />
        </>
    );
};

export default Payment;
