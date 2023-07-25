import { useEffect, useState } from "react";
import { Col, Divider, Input, Row, Space, Table } from "antd";
import styled from "styled-components";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IMaterials } from "@/interfaces/inventory/IMaterials";
import { materialsService } from "@/services/inventory/materialsService";
import CategoriesTree from "./CategoriesTree";
import Create from "./Create";
import Remove from "./Remove";
import Enable from "./Enable";
import Disable from "./Disable";

const { Search } = Input;

const Materials = () => {
    const themeController = useThemeController();
    const [materials, setMaterials] = useState<IMaterials>();

    useEffect(() => {
        getMaterials();
    }, []);

    const getMaterials = async () => {
        const result = await materialsService.getMaterials();
        setMaterials(result);
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_NAME],
            dataIndex: "name",
            key: "name",
            width: 200,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CODE],
            dataIndex: "code",
            key: "code",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CATEGORY],
            dataIndex: "category",
            key: "category",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_DEPARTMENT],
            dataIndex: "department",
            key: "department",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_REGULAR_MAINTENANCE_FREQUENCY],
            dataIndex: "regularMaintenanceFrequency",
            key: "regularMaintenanceFrequency",
            width: 240,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            width: 330,
            fixed: "right" as const,
            render: (text: any, record: any) => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Create isEdit materialInfo={record} />
                            <Remove materialInfo={record} />
                            <Enable materialInfo={record} />
                            <Disable materialInfo={record} />
                        </Space>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <RowMaterials>
                <ColumnCategories>
                    <CategoriesTree />
                </ColumnCategories>
                <Col style={{ maxWidth: "calc(100vw - 615px)" }}>
                    <Row style={{ marginBottom: "10px" }}>
                        <Col style={{ flex: 1 }}>
                            <Search
                                placeholder={`${
                                    themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CODE]
                                }/${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_NAME]}/${
                                    themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CATEGORY]
                                }/${themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_DEPARTMENT]}`}
                                style={{ width: 500 }}
                            />
                        </Col>
                        <Col>
                            <Create />
                        </Col>
                    </Row>
                    <Table
                        columns={columns}
                        dataSource={materials?.materials}
                        bordered
                        size="small"
                        rowKey="id"
                        scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                        pagination={{
                            total: materials?.total,
                            pageSize: materials?.pageSize,
                            current: materials?.current,
                            size: "default",
                        }}
                    />
                </Col>
            </RowMaterials>
        </>
    );
};

export default Materials;

const RowMaterials = styled(Row)`
    height: 100%;
    gap: 12px;
`;

const ColumnCategories = styled(Col)`
    width: 280px;
    border: 1px solid #eeeeee;
    overflow-y: auto;
    height: 100%;
    padding: 8px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
