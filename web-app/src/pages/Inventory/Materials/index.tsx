import { Tabs } from "antd";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import PageCard from "@/components/PageCard";
import SubMaterials from "./Materials";
import SubCategories from "./Categories";

const Materials = () => {
    const themeController = useThemeController();

    return (
        <>
            <PageCard
                breadcrumbs={[
                    themeController.languagePack?.[LANGUAGE_KEYS.FIRST_MENU_INVENTORY],
                    themeController.languagePack?.[LANGUAGE_KEYS.SUB_MENU_MATERIALS],
                ]}
            >
                <Tabs
                    defaultActiveKey="1"
                    size="small"
                    items={[
                        {
                            key: "1",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS],
                            children: <SubMaterials />,
                        },
                        {
                            key: "2",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORIES],
                            children: <SubCategories />,
                        },
                    ]}
                />
            </PageCard>
        </>
    );
};

export default Materials;
