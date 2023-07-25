import { Popconfirm, Space, Typography } from "antd";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import { useThemeController } from "@/theme";
import { IMaterialsCategory } from "@/interfaces/inventory/IMaterials";

interface IProps {
    categoryInfo: IMaterialsCategory;
}

const Remove = ({ categoryInfo }: IProps) => {
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
                title={themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_REMOVE]}
                description={
                    themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_REMOVE_DESCRIPTION]
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
                        <DeleteOutlined />
                        {themeController.languagePack?.[LANGUAGE_KEYS.COMMON_REMOVE]}
                    </Space>
                </Typography.Link>
            </Popconfirm>
        </>
    );
};

export default Remove;
