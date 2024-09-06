"use client";

import { useState } from "react";
import { Menu, MenuProps } from "antd";
import * as Icons from "@ant-design/icons";

const getIcon = (iconName: string) => {
    const CustomIcon = (Icons as any)[iconName];
    return <CustomIcon />;
};

const items: any[] = [
    {
        key: "01",
        icon: getIcon("FolderOpenOutlined"),
        label: "项目管理",
        children: [
            { key: "0101", label: "项目计划", path: "/projects/planning" },
            { key: "0102", label: "项目进度", path: "/projects/schedule" },
            { key: "0103", label: "项目成果", path: "/projects/achievement" },
            { key: "0104", label: "项目风险", path: "/projects/risk" },
        ],
    },
    {
        key: "02",
        icon: getIcon("MoneyCollectOutlined"),
        label: "财务管理",
        children: [
            { key: "0201", label: "会计核算", path: "/financial/accounting" },
            { key: "0202", label: "发票管理", path: "/financial/invoice" },
            { key: "0203", label: "费用管理", path: "/financial/expense" },
            { key: "0204", label: "财务报表", path: "/financial/report" },
            { key: "0205", label: "财务预算", path: "/financial/budget" },
            { key: "0206", label: "财务分析", path: "/financial/analysis" },
            { key: "0207", label: "财务审计", path: "/financial/auditing" },
            { key: "0208", label: "财务决策", path: "/financial/decision" },
        ],
    },
    {
        key: "03",
        icon: getIcon("AppstoreAddOutlined"),
        label: "生产管理",
        children: [
            { key: "0301", label: "生产计划", path: "/production/planning" },
            { key: "0302", label: "物料需求计划", path: "/production/mrp" },
            { key: "0303", label: "能力需求计划", path: "/production/crp" },
            { key: "0304", label: "车间控制", path: "/production/shop-control" },
            { key: "0305", label: "制造标准", path: "/production/manufacture-standard" },
            { key: "0306", label: "生产订单", path: "/production/order" },
            { key: "0307", label: "生产进度", path: "/production/schedule" },
            { key: "0308", label: "生产成本", path: "/production/costing" },
        ],
    },
    {
        key: "04",
        icon: getIcon("TruckOutlined"),
        label: "采购管理",
        children: [
            { key: "0401", label: "采购计划", path: "/purchasing/planning" },
            { key: "0402", label: "采购订单", path: "/purchasing/order" },
            { key: "0403", label: "采购收货", path: "/purchasing/receiving" },
        ],
    },
    {
        key: "05",
        icon: getIcon("ShareAltOutlined"),
        label: "销售管理",
        children: [
            {
                key: "0501",
                label: "客户关系管理(CRM)",
                children: [
                    { key: "050101", label: "客户档案", path: "/selling/crm/customer-archives" },
                    { key: "050102", label: "客户投诉", path: "/selling/crm/customer-complaints" },
                    { key: "050103", label: "客户满意度调查", path: "/selling/crm/satisfaction-surveys" },
                    { key: "050104", label: "客户关怀", path: "/selling/crm/customer-cares" },
                ],
            },
            {
                key: "0502",
                label: "销售管理",
                children: [
                    { key: "050201", label: "销售计划", path: "/selling/selling/planning" },
                    { key: "050202", label: "销售订单", path: "/selling/selling/order" },
                    { key: "050203", label: "销售出库", path: "/selling/selling/outbound" },
                ],
            },
            { key: "0503", label: "租赁管理", path: "/selling/leasing" },
        ],
    },
    {
        key: "06",
        icon: getIcon("BankOutlined"),
        label: "库存管理",
        children: [
            { key: "0601", label: "供应商管理", path: "/inventory/suppliers" },
            { key: "0602", label: "物资管理", path: "/inventory/materials" },
            { key: "0603", label: "库房管理", path: "/inventory/warehouse" },
            { key: "0604", label: "库存管理", path: "/inventory/inventory" },
            { key: "0605", label: "库存盘点", path: "/inventory/counting" },
            { key: "0606", label: "库存调拨", path: "/inventory/transfer" },
            { key: "0607", label: "库存报废", path: "/inventory/scrapping" },
            { key: "0608", label: "库存预警", path: "/inventory/early-warning" },
        ],
    },
    {
        key: "07",
        icon: getIcon("DeploymentUnitOutlined"),
        label: "资产管理",
        children: [
            { key: "0701", label: "资产档案", path: "/asset/archives" },
            { key: "0702", label: "资产折旧", path: "/asset/depreciation" },
            { key: "0703", label: "资产维修", path: "/asset/maintaining" },
            { key: "0704", label: "资产报废", path: "/asset/scrapping" },
        ],
    },
    {
        key: "08",
        icon: getIcon("NodeExpandOutlined"),
        label: "综合办公",
        children: [
            { key: "0801", label: "流程管理", path: "/oa/following" },
            { key: "0802", label: "公文管理", path: "/oa/official-document" },
            { key: "0803", label: "协同工作", path: "/oa/teamwork" },
        ],
    },
    {
        key: "09",
        icon: getIcon("UserSwitchOutlined"),
        label: "人力资源管理",
        children: [
            { key: "0901", label: "档案管理", path: "/hr/employee-files" },
            { key: "0902", label: "薪资管理", path: "/hr/salaries" },
            { key: "0903", label: "绩效考核", path: "/hr/performance-appraisal" },
            { key: "0904", label: "培训管理", path: "/hr/traning" },
            { key: "0905", label: "招聘管理", path: "/hr/recruiting" },
        ],
    },
    {
        key: "10",
        icon: getIcon("SettingOutlined"),
        label: "系统管理",
        children: [
            { key: "1001", label: "用户管理", path: "/system/users" },
            { key: "1002", label: "角色管理", path: "/system/roles" },
            { key: "1003", label: "部门管理", path: "/system/departments" },
            { key: "1004", label: "菜单管理", path: "/system/menus" },
            { key: "1005", label: "系统日志", path: "/system/logs" },
        ],
    },
];

interface LevelKeysProps {
    key?: string;
    children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (items2: LevelKeysProps[], level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

interface IProps {
    collapsed?: boolean;
}

const Menus = ({ collapsed }: IProps) => {
    const [stateOpenKeys, setStateOpenKeys] = useState<string[]>(["2", "23"]);

    const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };

    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={["231"]}
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                items={items}
                inlineCollapsed={collapsed}
                className="h-full"
            />
        </>
    );
};

export default Menus;
