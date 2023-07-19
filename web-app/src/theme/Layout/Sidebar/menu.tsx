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
        title: LANGUAGE_KEYS.FIRST_MENU_MANUFACTURE,
        icon: <DeploymentUnitOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_PLAN,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MATERIALS_PLAN,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ABILITY_PLAN,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_PLANT_CONTROL,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_STANDARD,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_ORDER,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_PROGRESS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_COST,
                url: "",
            },
        ],
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
            {
                title: LANGUAGE_KEYS.SUB_MENU_BUDGET,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ANALYSIS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_AUDIT,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_DECISION,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_PROJECTS,
        icon: <FolderOpenOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_PROJECTS_PLAN,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_PROJECTS_PROGRESS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_PROJECTS_ACHIEVEMENT,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_PROJECTS_RISK,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_ASSETS,
        icon: <UngroupOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_ASSETS_ARCHIVES,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ASSETS_DEPRECIATION,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ASSETS_MAINTENANCE,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ASSETS_RETIREMENT,
                url: "",
            },
        ],
    },
    {
        title: LANGUAGE_KEYS.FIRST_MENU_OFFICE_AUTOMATION,
        icon: <LaptopOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_PROCESS_MANAGEMENT,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_OFFICIAL_DOCUMENTS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_TEAMWORK,
                url: "",
            },
        ],
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
    {
        title: LANGUAGE_KEYS.FIRST_MENU_SYSTEM_MANAGEMENT,
        icon: <TeamOutlined />,
        children: [
            {
                title: LANGUAGE_KEYS.SUB_MENU_USERS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_ROLES,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_DEPARTMENTS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_MENUS,
                url: "",
            },
            {
                title: LANGUAGE_KEYS.SUB_MENU_LOGS,
                url: "",
            },
        ],
    },
];
