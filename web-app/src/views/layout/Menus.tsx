"use client";

import { Menu, MenuProps } from "antd";
import {
    FolderOpenOutlined,
    MoneyCollectOutlined,
    AppstoreAddOutlined,
    SettingOutlined,
    TruckOutlined,
    ShareAltOutlined,
    BankOutlined,
    DeploymentUnitOutlined,
    NodeExpandOutlined,
    UserSwitchOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
    {
        key: "01",
        icon: <FolderOpenOutlined />,
        label: "项目管理",
        children: [
            { key: "0101", label: "项目计划" },
            { key: "0102", label: "项目进度" },
            { key: "0103", label: "项目成果" },
            { key: "0104", label: "项目风险" },
        ],
    },
    {
        key: "02",
        icon: <MoneyCollectOutlined />,
        label: "财务管理",
        children: [
            { key: "0201", label: "会计核算" },
            { key: "0202", label: "发票管理" },
            { key: "0203", label: "费用管理" },
            { key: "0204", label: "财务报表" },
            { key: "0205", label: "财务预算" },
            { key: "0206", label: "财务分析" },
            { key: "0207", label: "财务审计" },
            { key: "0208", label: "财务决策" },
        ],
    },
    {
        key: "03",
        icon: <AppstoreAddOutlined />,
        label: "生产管理",
        children: [
            { key: "0301", label: "生产计划" },
            { key: "0302", label: "物料需求计划" },
            { key: "0303", label: "能力需求计划" },
            { key: "0304", label: "车间控制" },
            { key: "0305", label: "制造标准" },
            { key: "0306", label: "生产订单" },
            { key: "0307", label: "生产进度" },
            { key: "0308", label: "生产成本" },
        ],
    },
    {
        key: "04",
        icon: <TruckOutlined />,
        label: "采购管理",
        children: [
            { key: "0401", label: "采购计划" },
            { key: "0402", label: "采购订单" },
            { key: "0403", label: "采购收货" },
        ],
    },
    {
        key: "05",
        icon: <ShareAltOutlined />,
        label: "销售管理",
        children: [
            {
                key: "0501",
                label: "客户关系管理(CRM)",
                children: [
                    { key: "050101", label: "客户档案" },
                    { key: "050102", label: "客户投诉" },
                    { key: "050103", label: "客户满意度调查" },
                    { key: "050104", label: "客户关怀" },
                ],
            },
            {
                key: "0502",
                label: "销售管理",
                children: [
                    { key: "050201", label: "销售计划" },
                    { key: "050202", label: "销售订单" },
                    { key: "050202", label: "销售出库" },
                ],
            },
            { key: "0503", label: "租赁管理" },
        ],
    },
    {
        key: "06",
        icon: <BankOutlined />,
        label: "库存管理",
        children: [
            { key: "0601", label: "供应商管理" },
            { key: "0602", label: "物资管理" },
            { key: "0603", label: "库房管理" },
            { key: "0604", label: "库存管理" },
            { key: "0605", label: "库存盘点" },
            { key: "0606", label: "库存调拨" },
            { key: "0607", label: "库存报废" },
            { key: "0608", label: "库存预警" },
        ],
    },
    {
        key: "07",
        icon: <DeploymentUnitOutlined />,
        label: "资产管理",
        children: [
            { key: "0701", label: "资产档案" },
            { key: "0702", label: "资产折旧" },
            { key: "0703", label: "资产维修" },
            { key: "0704", label: "资产报废" },
        ],
    },
    {
        key: "08",
        icon: <NodeExpandOutlined />,
        label: "综合办公",
        children: [
            { key: "0801", label: "流程管理" },
            { key: "0802", label: "公文管理" },
            { key: "0803", label: "协同工作" },
        ],
    },
    {
        key: "09",
        icon: <UserSwitchOutlined />,
        label: "人力资源管理",
        children: [
            { key: "0901", label: "档案管理" },
            { key: "0902", label: "薪资管理" },
            { key: "0903", label: "绩效考核" },
            { key: "0904", label: "培训管理" },
            { key: "0904", label: "招聘管理" },
        ],
    },
    {
        key: "10",
        icon: <SettingOutlined />,
        label: "系统管理",
        children: [
            { key: "1001", label: "用户管理" },
            { key: "1002", label: "角色管理" },
            { key: "1003", label: "部门管理" },
            { key: "1004", label: "菜单管理" },
            { key: "1005", label: "系统日志" },
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
