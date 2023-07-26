import { useEffect, useState } from "react";
import { Button, Col, Divider, Input, Row, Space, Table, Typography } from "antd";
import { FileTextOutlined, PlusOutlined } from "@ant-design/icons";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { useThemeController } from "@/theme";
import { ICountingRegulars } from "@/interfaces/inventory/ICounting";
import { countingService } from "@/services/inventory/countingService";

const { Search } = Input;

const Regular = () => {
    const themeController = useThemeController();

    const [regulars, setRegulars] = useState<ICountingRegulars>();

    useEffect(() => {
        getRegulars();
    }, []);

    const getRegulars = async () => {
        const result = await countingService.getRegulars();
        setRegulars(result);
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_TITLE],
            dataIndex: "warehouseTitle",
            key: "warehouseTitle",
            width: 200,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_DATE],
            dataIndex: "countingDate",
            key: "countingDate",
            width: 100,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_RESPONSIBLE_PERSON],
            dataIndex: "countingResponsiblePerson",
            key: "countingResponsiblePerson",
            width: 150,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_SCENE_RESPONSIBLE_PERSON],
            dataIndex: "sceneResponsiblePerson",
            key: "sceneResponsiblePerson",
            width: 150,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_STATUS],
            dataIndex: "status",
            key: "status",
            width: 150,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            width: 80,
            fixed: "right" as const,
            render: (text: any, record: any) => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Typography.Link>
                                <Space size={4}>
                                    <FileTextOutlined />
                                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_DETAILS]}
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
            <Row style={{ marginBottom: "10px" }}>
                <Col style={{ flex: 1 }}>
                    <Search
                        placeholder={`${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_TITLE]}`}
                        style={{ width: 500 }}
                    />
                </Col>
                <Col>
                    <Button icon={<PlusOutlined />} type="primary">
                        {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_REGULAR_RULE_SETUP]}
                    </Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={regulars?.regulars}
                bordered
                size="small"
                rowKey="id"
                scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                pagination={{
                    total: regulars?.total,
                    pageSize: regulars?.pageSize,
                    current: regulars?.current,
                    size: "default",
                }}
            />
        </>
    );
};

export default Regular;
