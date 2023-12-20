import { useState } from "react";
import { Col, Modal, Row, Space, Typography } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IInventory } from "@/interfaces/inventory/IInventory";
import { BaseStyled } from "@/components/BaseStyled";
import { styled } from "styled-components";

const { Text, Link } = Typography;

interface IProps {
    inventory: IInventory;
}

const Details = ({ inventory }: IProps) => {
    const themeController = useThemeController();

    const [open, setOpen] = useState<boolean>(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Link onClick={onOpen}>
                <Space size={4}>
                    <FileTextOutlined />
                    {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_DETAILS]}
                </Space>
            </Link>
            <Modal
                title={`${inventory.name} ${themeController.languagePack?.[LANGUAGE_KEYS.COMMON_DETAILS]}`}
                open={open}
                onCancel={onCancel}
                footer={null}
            >
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_NAME]}
                        </Text>
                    </Column>
                    <Column {...themeController.formItemLayout.wrapperCol}>{inventory.name}</Column>
                </Row>
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CODE]}
                        </Text>
                    </Column>
                    <Column>{inventory.code}</Column>
                </Row>
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_COUNT]}
                        </Text>
                    </Column>
                    <Column>{inventory.materialCount}</Column>
                </Row>
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_CATEGORY]}
                        </Text>
                    </Column>
                    <Column>{inventory.category}</Column>
                </Row>
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_DEPARTMENT]}
                        </Text>
                    </Column>
                    <Column>{inventory.department}</Column>
                </Row>
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_TITLE]}
                        </Text>
                    </Column>
                    <Column>{inventory.supplierTitle}</Column>
                </Row>
                <Row>
                    <Column {...themeController.formItemLayout.labelCol}>
                        <Text type="secondary">
                            {themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_TITLE]}
                        </Text>
                    </Column>
                    <Column>{inventory.warehouseTitle}</Column>
                </Row>
            </Modal>
        </>
    );
};

export default Details;

const Column = BaseStyled(styled(Col)`
    &:first-child {
        text-align: right;
        padding-right: 8px;
    }
`);
