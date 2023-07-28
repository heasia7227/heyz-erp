import { Popconfirm, Space, Typography } from "antd";
import { QuestionCircleOutlined, StopOutlined } from "@ant-design/icons";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { useThemeController } from "@/theme";
import { IMaterial } from "@/interfaces/inventory/IMaterials";

interface IProps {
    materialInfo?: IMaterial;
}

const Disable = ({ materialInfo }: IProps) => {
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
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_DISABLE]}
                description={
                    themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_DISABLE_DESCRIPTION]
                }
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                onConfirm={onConfirm}
                onCancel={onCancel}
                okButtonProps={{
                    danger: true,
                }}
            >
                <Typography.Link>
                    <Space size={4}>
                        <StopOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_DISABLE]}
                    </Space>
                </Typography.Link>
            </Popconfirm>
        </>
    );
};

export default Disable;
