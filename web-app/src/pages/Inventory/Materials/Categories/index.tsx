import { useEffect, useState } from "react";
import { Col, Divider, Input, Row, Space, Table, Typography } from "antd";
import { FolderOpenFilled, MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IMaterialsCategory } from "@/interfaces/inventory/IMaterials";
import { materialsService } from "@/services/inventory/materialsService";
import Create from "./Create";
import Remove from "./Remove";
import Enable from "./Enable";
import Disable from "./Disable";

const { Search } = Input;

const Categories = () => {
    const themeController = useThemeController();
    const [categories, setCategories] = useState<Array<IMaterialsCategory>>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const result = await materialsService.getCategories();
        setCategories(result);
    };

    const columns = [
        {
            title: "#",
            key: "serialNumber",
            render: (text: any, record: any, index: number) => index + 1,
            align: "center" as const,
            width: 40,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_TITLE],
            dataIndex: "title",
            key: "title",
            render: (text: any, record: any) => {
                return (
                    <span style={{ marginLeft: "8px" }}>
                        {record?.children?.length > 0 ? (
                            <Space>
                                <FolderOpenFilled style={{ color: themeController.primarycolor }} />
                                {text}
                            </Space>
                        ) : (
                            text
                        )}
                    </span>
                );
            },
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_CODE],
            dataIndex: "code",
            key: "code",
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            render: (text: any, record: any) => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Create isEdit categoryInfo={record} refresh={getCategories} />
                            <Remove categoryInfo={record} />
                            <Enable categoryInfo={record} />
                            <Disable categoryInfo={record} />
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
                            themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_TITLE]
                        }/${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_CODE]}`}
                        style={{ width: 500 }}
                    />
                </Col>
                <Col>
                    <Create refresh={getCategories} />
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={categories}
                bordered
                size="small"
                rowKey="key"
                expandable={{
                    expandIconColumnIndex: 1,
                    indentSize: 35,
                    expandIcon: ({ expanded, onExpand, record }) => (
                        <Typography.Link onClick={(e) => onExpand(record, e)}>
                            {record?.children?.length > 0 ? (
                                expanded ? (
                                    <MinusSquareOutlined />
                                ) : (
                                    <PlusSquareOutlined onClick={(e) => onExpand(record, e)} />
                                )
                            ) : (
                                <></>
                            )}
                        </Typography.Link>
                    ),
                }}
                pagination={false}
                scroll={{ y: "calc(100vh - 260px)" }}
            />
        </>
    );
};

export default Categories;
