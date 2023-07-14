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
        title: "PRODUCTION",
        icon: <DeploymentUnitOutlined />,
        children: [],
    },
    {
        title: "INVENTORY",
        icon: <BankOutlined />,
        children: [
            {
                title: "Materials",
                url: "",
            },
            {
                title: "Warehouse",
                url: "",
            },
            {
                title: "Counting",
                url: "",
            },
            {
                title: "Transfer",
                url: "",
            },
            {
                title: "Scrap",
                url: "",
            },
            {
                title: "Early Warning",
                url: "",
            },
            {
                title: "Quality",
                url: "",
            },
        ],
    },
    {
        title: "PURCHASING",
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
        title: "SALES",
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
        title: "FINANCE",
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
        title: "PROJECTS",
        icon: <FolderOpenOutlined />,
        children: [],
    },
    {
        title: "ASSETS",
        icon: <UngroupOutlined />,
        children: [],
    },
    {
        title: "OFFICE AUTOMATION",
        icon: <LaptopOutlined />,
        children: [],
    },
    {
        title: "HUMAN RESOURCE",
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
