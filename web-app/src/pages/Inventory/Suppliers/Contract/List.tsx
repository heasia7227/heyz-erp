import { Button, Divider, Modal, Row, Space, Table, Typography } from "antd";
import { ISupplierArchive, ISupplierContracts } from "@/interfaces/inventory/ISupplier";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { DeleteOutlined, DownloadOutlined, EyeOutlined, MenuOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { supplierService } from "@/services/inventory/supplierService";
import Create from "./Create";

interface IProps {
    supplierArchive: ISupplierArchive;
}

const List = ({ supplierArchive }: IProps) => {
    const themeController = useThemeController();
    const [open, setOpen] = useState<boolean>(false);
    const [contracts, setContracts] = useState<ISupplierContracts>();

    const onCancel = () => {
        setOpen(false);
    };

    const onClick = () => {
        setOpen(true);
        getContracts();
    };

    const getContracts = async () => {
        const result = await supplierService.getContracts();
        setContracts(result);
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
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_ID],
            dataIndex: "id",
            key: "id",
        },
        {
            title: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_TITLE],
            dataIndex: "title",
            key: "title",
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
                    {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_LIST]}
                </Space>
            </Typography.Link>
            <Modal
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_LIST]}
                open={open}
                onCancel={onCancel}
                footer={null}
                width={900}
                getContainer={document.getElementById("theme")!}
            >
                <Row style={{ marginBottom: "10px", justifyContent: "right" }}>
                    <Create supplierArchive={supplierArchive} />
                </Row>
                <Table
                    columns={columns}
                    dataSource={contracts?.contracts}
                    bordered
                    size="small"
                    rowKey="id"
                    pagination={{
                        total: contracts?.total,
                        pageSize: contracts?.pageSize,
                        current: contracts?.current,
                        size: "default",
                    }}
                />
            </Modal>
        </>
    );
};

export default List;
