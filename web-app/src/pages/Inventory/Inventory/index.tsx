import { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Divider, Input, Row, Space, Table, Typography } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import PageCard from "@/components/PageCard";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IInventories } from "@/interfaces/inventory/IInventory";
import { inventoryService } from "@/services/inventory/inventoryService";
import CategoriesTree, { ColumnCategories } from "../Materials/Categories/Tree";
import Details from "./Details";

const { Search } = Input;

const Inventory = () => {
    const themeController = useThemeController();

    const [inventories, setInventories] = useState<IInventories>();

    useEffect(() => {
        getInventories();
    }, []);

    const getInventories = async () => {
        const result = await inventoryService.getInventories();
        setInventories(result);
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
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_COUNT],
            dataIndex: "materialCount",
            key: "materialCount",
            width: 100,
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_TITLE],
            dataIndex: "supplierTitle",
            key: "supplierTitle",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_TITLE],
            dataIndex: "warehouseTitle",
            key: "warehouseTitle",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.COMMON_OPERATION],
            key: "operation",
            width: 130,
            fixed: "right" as const,
            render: (text: any, record: any) => {
                return (
                    <>
                        <Space split={<Divider type="vertical" />} size={0}>
                            <Details inventory={record} />
                        </Space>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <PageCard
                breadcrumbs={[
                    themeController.languagePack?.[LANGUAGE_KEYS.FIRST_MENU_INVENTORY],
                    themeController.languagePack?.[LANGUAGE_KEYS.SUB_MENU_INVENTORY],
                ]}
            >
                <RowInventorys>
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
                        </Row>
                        <Table
                            columns={columns}
                            dataSource={inventories?.inventories}
                            bordered
                            size="small"
                            rowKey="id"
                            scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                            pagination={{
                                total: inventories?.total,
                                pageSize: inventories?.pageSize,
                                current: inventories?.current,
                                size: "default",
                            }}
                        />
                    </Col>
                </RowInventorys>
            </PageCard>
        </>
    );
};

export default Inventory;

const RowInventorys = styled(Row)`
    height: 100%;
    gap: 12px;
`;
