import React, { useState } from "react";
import styled from "styled-components";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useThemeController } from "@/theme";
import { BaseStyled, DivProps } from "@/components/BaseStyled";
import { menus } from "./menu";

const Sidebar = () => {
    const themeController = useThemeController();
    const [expands, setExpands] = useState<Array<string>>([]);

    const onFirstMenuClick = (title: string) => {
        if (expands.includes(title)) {
            setExpands([...expands.filter((item) => item !== title)]);
        } else {
            expands.push(title);
            setExpands([...expands]);
        }
    };

    return (
        <>
            <SidebarLayout>
                <Logo>Heyz-ERP</Logo>
                <Menu>
                    {menus.map((menu, key) => {
                        return (
                            <React.Fragment key={key}>
                                <FirstMenuItem
                                    icon={menu.icon}
                                    expand={expands.includes(menu.title)}
                                    onClick={onFirstMenuClick.bind(null, menu.title)}
                                >
                                    {themeController.languagePack?.[menu.title]}
                                </FirstMenuItem>
                                {expands.includes(menu.title) && menu.children && menu.children.length > 0 && (
                                    <SubMenu>
                                        {menu.children?.map((submenu, index) => {
                                            return (
                                                <MenuItem key={index} style={{ paddingLeft: "42px" }}>
                                                    {themeController.languagePack?.[submenu.title]}
                                                </MenuItem>
                                            );
                                        })}
                                    </SubMenu>
                                )}
                            </React.Fragment>
                        );
                    })}
                </Menu>
            </SidebarLayout>
        </>
    );
};

export default Sidebar;

interface IFirstMenuItemProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
    expand?: boolean;
    onClick: () => void;
}

const FirstMenuItem = ({ icon, children, expand, onClick }: IFirstMenuItemProps) => {
    return (
        <MenuItem style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }} onClick={onClick}>
            <span style={{ marginRight: "8px" }}>{icon}</span>
            <span>{children}</span>
            <MenuArrow>{expand ? <UpOutlined /> : <DownOutlined />}</MenuArrow>
        </MenuItem>
    );
};

const SidebarLayout = BaseStyled(styled.div<DivProps>`
    width: 250px;
    height: 100%;
    background-color: ${(props) => props.primarycolors?.[9]};
    box-shadow: 6px 0 16px 0 rgba(0, 0, 0, 0.16);
`);

const Logo = styled.div`
    line-height: 49px;
    font-size: 22px;
    font-weight: bold;
    color: #f0f0f0;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
`;

const Menu = styled.div`
    font-size: 16px;
    user-select: none;
    color: #ffffff70;
    max-height: calc(100% - 50px);
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const MenuItem = styled.div`
    position: relative;
    padding: 12px 20px;
    cursor: pointer;
    &:hover {
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0.08);
    }
`;

const SubMenu = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 8px 0;
`;

const MenuArrow = styled.span`
    position: absolute;
    right: 12px;
`;
