import { useEffect, useState } from "react";
import { Col, Divider, Input, Row, Space, Table } from "antd";
import { useThemeController } from "@/theme";
import PageCard from "@/components/PageCard";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IWarehouses } from "@/interfaces/inventory/IWarehouse";
import { warehouseService } from "@/services/inventory/warehouseService";
import Create from "./Create";
import Remove from "./Remove";
import Enable from "./Enable";
import Disable from "./Disable";

const { Search } = Input;

const Warehouse = () => {
    const themeController = useThemeController();
    const [warehouses, setWarehouses] = useState<IWarehouses>();

    useEffect(() => {
        getWarehouses();
    }, []);

    const getWarehouses = async () => {
        const result = await warehouseService.getWarehouses();
        setWarehouses(result);
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
            dataIndex: "name",
            key: "name",
            width: 200,
            fixed: "left" as const,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_DEPARTMENT],
            dataIndex: "department",
            key: "department",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ADDRESS],
            dataIndex: "address",
            key: "address",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_POSITION],
            dataIndex: "position",
            key: "position",
            width: 200,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_LEVEL],
            dataIndex: "level",
            key: "level",
            width: 80,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ADMINISTRATOR],
            dataIndex: "administrator",
            key: "administrator",
            width: 120,
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_CONTACT_NUMBER],
            dataIndex: "contactNumber",
            key: "contactNumber",
            width: 150,
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
                            <Create isEdit warehouse={record} />
                            <Remove warehouse={record} />
                            <Enable warehouse={record} />
                            <Disable warehouse={record} />
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
                    themeController.languagePack?.[LANGUAGE_KEYS.SUB_MENU_WAREHOUSE],
                ]}
            >
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
                        <Create />
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    dataSource={warehouses?.warehouses}
                    bordered
                    size="small"
                    rowKey="id"
                    scroll={{ x: columns.map((col) => col.width).reduce((pre, cur) => pre + cur) }}
                    pagination={{
                        total: warehouses?.total,
                        pageSize: warehouses?.pageSize,
                        current: warehouses?.current,
                        size: "default",
                    }}
                />
            </PageCard>
        </>
    );
};

export default Warehouse;
