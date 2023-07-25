import { Col, Divider, Input, Row, Space, Table, Typography } from "antd";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { ISupplierEvaluations } from "@/interfaces/inventory/ISupplier";
import { useEffect, useState } from "react";
import { supplierService } from "@/services/inventory/supplierService";
import { PlusOutlined } from "@ant-design/icons";
import List from "./List";
import Create from "./Create";

const { Search } = Input;

const Evaluation = () => {
    const themeController = useThemeController();
    const [evaluations, setEvaluations] = useState<ISupplierEvaluations>();

    useEffect(() => {
        getEvaluations();
    }, []);

    const getEvaluations = async () => {
        const result = await supplierService.getEvaluations();
        setEvaluations(result);
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_SCORE],
            dataIndex: "evaluationScore",
            key: "evaluationScore",
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
                            <List supplierEvaluation={record} />
                            <Create isLink supplierEvaluation={record} />
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
                dataSource={evaluations?.evaluations}
                bordered
                size="small"
                rowKey="id"
                scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                pagination={{
                    total: evaluations?.total,
                    pageSize: evaluations?.pageSize,
                    current: evaluations?.current,
                    size: "default",
                }}
            />
        </>
    );
};

export default Evaluation;
