import { useEffect, useState } from "react";
import { Button, Col, Divider, Input, Row, Space, Table, Typography } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { ISupplierArchives } from "@/interfaces/inventory/ISupplier";
import { supplierService } from "@/services/inventory/supplierService";

const { Search } = Input;

const Archives = () => {
    const themeController = useThemeController();
    const [archives, setArchives] = useState<ISupplierArchives>();

    useEffect(() => {
        getArchives();
    }, []);

    const getArchives = async () => {
        const result = await supplierService.getArchives();
        setArchives(result);
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_TITLE],
            dataIndex: "title",
            key: "title",
            width: 350,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_RESPONSIBLE_PERSON],
            dataIndex: "responsiblePerson",
            key: "responsiblePerson",
            width: 100,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_GENDER],
            dataIndex: "gender",
            key: "gender",
            width: 80,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_CONTACT_NUMBER],
            dataIndex: "contactNumber",
            key: "contactNumber",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_ADDRESS],
            dataIndex: "address",
            key: "address",
            width: 400,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_CREATE_DATE_TIME],
            dataIndex: "createDateTime",
            key: "createDateTime",
            width: 180,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            width: 150,
            fixed: "right" as const,
            render: () => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Typography.Link>
                                <Space size={4}>
                                    <EditOutlined />
                                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_EDIT]}
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
            <Row style={{ marginBottom: "10px" }}>
                <Col style={{ flex: 1 }}>
                    <Search
                        placeholder={`${
                            themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_TITLE]
                        }/${
                            themeController.languagePack?.[
                                LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_RESPONSIBLE_PERSON
                            ]
                        }/${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES_CONTACT_NUMBER]}`}
                        style={{ width: 500 }}
                    />
                </Col>
                <Col>
                    <Button icon={<PlusOutlined />} type="primary">
                        {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_CREATE]}
                    </Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={archives?.archives}
                bordered
                size="small"
                rowKey="id"
                scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                pagination={{
                    total: archives?.total,
                    pageSize: archives?.pageSize,
                    current: archives?.current,
                    size: "default",
                }}
            />
        </>
    );
};

export default Archives;
