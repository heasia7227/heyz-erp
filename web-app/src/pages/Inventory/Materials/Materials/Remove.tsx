import { Popconfirm, Space, Typography } from "antd";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IMaterial } from "@/interfaces/inventory/IMaterials";

interface IProps {
    materialInfo?: IMaterial;
}

const Remove = ({ materialInfo }: IProps) => {
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
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_REMOVE]}
                description={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_REMOVE_DESCRIPTION]}
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
