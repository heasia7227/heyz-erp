import { Popconfirm, Space, Typography } from "antd";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IWarehouse } from "@/interfaces/inventory/IWarehouse";

interface IProps {
    warehouse?: IWarehouse;
}

const Remove = ({ warehouse }: IProps) => {
    const themeController = useThemeController();

    const onConfirm = () => {
        console.log("onConfirm");
    };

    const onCancel = () => {
        console.log("onCancel");
    };

    return (
        <>
            <Popconfirm
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_REMOVE]}
                description={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_WAREHOUSE_REMOVE_DESCRIPTION]}
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                onConfirm={onConfirm}
                onCancel={onCancel}
                okButtonProps={{
                    danger: true,
                }}
            >
                <Typography.Link>
                    <Space size={4}>
                        <DeleteOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_REMOVE]}
                    </Space>
                </Typography.Link>
            </Popconfirm>
        </>
    );
};

export default Remove;
