import { LANGUAGE_KEYS } from "@/theme/languages/languageKeys";
import {
    AuditOutlined,
    BankOutlined,
    DeploymentUnitOutlined,
    FolderOpenOutlined,
    GoldOutlined,
    LaptopOutlined,
    LineChartOutlined,
    TeamOutlined,
    UngroupOutlined,
} from "@ant-design/icons";

export const menus = [
    {
        title: LANGUAGE_KEYS.FIRST_MENU_PRODUCTION,
        icon: <DeploymentUnitOutlined />,
        children: [],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_INVENTORY,
        icon: <BankOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_SUPPLIERS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MATERIALS,
                url: "/inventory/materials",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_WAREHOUSE,
                url: "/inventory/warehouse",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_COUNTING,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_TRANSFER,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_SCRAP,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_EARLY_WARNING,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_QUALITY,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_PURCHASING,
        icon: <GoldOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_PLAN,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ORDER,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_TAKE_DELIVERY,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_SALES,
        icon: <LineChartOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_CRM,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_SALES,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_RENTAL,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_FINANCE,
        icon: <AuditOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_ACCOUNTING,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_INVOICING,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_EXPENSES,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_SPREADSHEET,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_PROJECTS,
        icon: <FolderOpenOutlined />,
        children: [],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_ASSETS,
        icon: <UngroupOutlined />,
        children: [],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_OFFICE_AUTOMATION,
        icon: <LaptopOutlined />,
        children: [],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_HUMAN_RESOURCE,
        icon: <TeamOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_EMPLOYEES,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_SALARIES,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_PERFORMANCE,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_TRAINING,
                url: "",
            },
        ],
    },
];
