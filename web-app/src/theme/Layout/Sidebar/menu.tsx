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
                title: LANGUAGE_KEYS.SUB_MENU_MATERIALS,
                url: "/inventory/materials",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_WAREHOUSE,
                url: "",
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
                title: "Suppliers",
                url: "",
            },
            {
                title: "Purchasing",
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_SALES,
        icon: <LineChartOutlined />,
        children: [
            {
                title: "CRM",
                url: "",
            },
            {
                title: "Sales",
                url: "",
            },
            {
                title: "Rental",
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_FINANCE,
        icon: <AuditOutlined />,
        children: [
            {
                title: "Accounting",
                url: "",
            },
            {
                title: "Invoicing",
                url: "",
            },
            {
                title: "Expenses",
                url: "",
            },
            {
                title: "Spreadsheet",
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
                title: "Employees",
                url: "",
            },
            {
                title: "Salaries",
                url: "",
            },
            {
                title: "Performance",
                url: "",
            },
            {
                title: "Training",
                url: "",
            },
        ],
    },
];
