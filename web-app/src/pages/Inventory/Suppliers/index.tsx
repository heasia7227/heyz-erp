import { Tabs } from "antd";
import PageCard from "@/components/PageCard";
import { useThemeController } from "@/theme";
import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import Archives from "./Archives";
import Evaluate from "./Evaluate";
import Contract from "./Contract";
import Payment from "./Payment";

const Suppliers = () => {
    const themeController = useThemeController();

    return (
        <>
            <PageCard
                breadcrumbs={[
                    themeController.languagePack?.[LANGUAGE_KEYS.FIRST_MENU_INVENTORY],
                    themeController.languagePack?.[LANGUAGE_KEYS.SUB_MENU_SUPPLIERS],
                ]}
            >
                <Tabs
                    defaultActiveKey="1"
                    size="small"
                    items={[
                        {
                            key: "1",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES],
                            children: <Archives />,
                        },
                        {
                            key: "2",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATE],
                            children: <Evaluate />,
                        },
                        {
                            key: "3",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT],
                            children: <Contract />,
                        },
                        {
                            key: "4",
                            label: themeController.languagePack?.[LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT],
                            children: <Payment />,
                        },
                    ]}
                />
            </PageCard>
        </>
    );
};

export default Suppliers;
