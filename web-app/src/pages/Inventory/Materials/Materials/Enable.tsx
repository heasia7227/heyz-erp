import { Popconfirm, Space, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { IMaterial } from "@/interfaces/inventory/IMaterials";

interface IProps {
    materialInfo?: IMaterial;
}

const Enable = ({ materialInfo }: IProps) => {
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
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_ENABLE]}
                description={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIAL_ENABLE_DESCRIPTION]}
                onConfirm={onConfirm}
                onCancel={onCancel}
            >
                <Typography.Link>
                    <Space size={4}>
                        <CheckCircleOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_ENABLE]}
                    </Space>
                </Typography.Link>
            </Popconfirm>
        </>
    );
};

export default Enable;
