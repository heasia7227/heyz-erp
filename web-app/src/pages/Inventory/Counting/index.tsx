import { Tabs } from "antd";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import PageCard from "@/components/PageCard";
import Temporary from "./Temporary";
import Regular from "./Regular";

const Counting = () => {
    const themeController = useThemeController();

    return (
        <>
            <PageCard
                breadcrumbs={[
                    themeController.languagePack?.[LANGUAGE_KEYS.FIRST_MENU_INVENTORY],
                    themeController.languagePack?.[LANGUAGE_KEYS.SUB_MENU_COUNTING],
                ]}
            >
                <Tabs
                    defaultActiveKey="1"
                    size="small"
                    items={[
                        {
                            key: "1",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_TEMPORARY],
                            children: <Temporary />,
                        },
                        {
                            key: "2",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_REGULAR],
                            children: <Regular />,
                        },
                        {
                            key: "3",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_COUNTING_DIFFERENCE],
                            children: <></>,
                        },
                    ]}
                />
            </PageCard>
        </>
    );
};

export default Counting;
