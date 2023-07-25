import { Col, Divider, Modal, Row, Space, Table, Typography } from "antd";
import { DeleteOutlined, MenuOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { ISupplierEvaluation, ISupplierEvaluationRecords } from "@/interfaces/inventory/ISupplier";
import { useState } from "react";
import { supplierService } from "@/services/inventory/supplierService";
import Create from "./Create";

interface IProps {
    supplierEvaluation: ISupplierEvaluation;
}

const List = ({ supplierEvaluation }: IProps) => {
    const themeController = useThemeController();

    const [open, setOpen] = useState<boolean>(false);
    const [evaluations, setEvaluations] = useState<ISupplierEvaluationRecords>();

    const onCancel = () => {
        setOpen(false);
    };

    const onClick = () => {
        setOpen(true);
        getEvaluationRecords();
    };

    const getEvaluationRecords = async () => {
        const result = await supplierService.getEvaluationRecords();
        setEvaluations(result);
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_SCORE],
            dataIndex: "score",
            key: "score",
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_NOTES],
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
                    {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_LIST]}
                </Space>
            </Typography.Link>
            <Modal
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_LIST]}
                open={open}
                onCancel={onCancel}
                footer={null}
                width={1000}
                getContainer={document.getElementById("theme")!}
            >
                <Row style={{ marginBottom: "10px", justifyContent: "right" }}>
                    <Col style={{ flex: 1 }}>
                        {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_AVERAGE_SCORE]}:
                        {evaluations?.averageScore}
                    </Col>
                    <Col>
                        <Create supplierEvaluation={supplierEvaluation} />
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    dataSource={evaluations?.evaluationRecords}
                    bordered
                    size="small"
                    rowKey="id"
                    pagination={{
                        total: evaluations?.total,
                        pageSize: evaluations?.pageSize,
                        current: evaluations?.current,
                        size: "default",
                    }}
                />
            </Modal>
        </>
    );
};

export default List;
