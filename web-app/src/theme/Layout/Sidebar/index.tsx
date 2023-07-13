import styled from "styled-components";
import { BaseStyled, DivProps } from "@/components/BaseStyled";
import { DownOutlined } from "@ant-design/icons";

const Sidebar = () => {
    return (
        <>
            <SidebarLayout>
                <Logo>Heyz-ERP</Logo>
                <Menu>
                    <FirstMenuItem>Production Management</FirstMenuItem>
                    <FirstMenuItem>Inventory Management</FirstMenuItem>
                    <SubMenu>
                        <MenuItem>Materials Management</MenuItem>
                        <MenuItem>Warehouse Management</MenuItem>
                        <MenuItem>Inventory Counting</MenuItem>
                        <MenuItem>Inventory Transfer</MenuItem>
                        <MenuItem>Inventory Scrap</MenuItem>
                        <MenuItem>Inventory Early Warning</MenuItem>
                    </SubMenu>
                    <FirstMenuItem>Purchasing Management</FirstMenuItem>
                    <FirstMenuItem>Sales Management</FirstMenuItem>
                    <FirstMenuItem>Supplier Management</FirstMenuItem>
                    <FirstMenuItem>Financial Management</FirstMenuItem>
                    <FirstMenuItem>Accounting</FirstMenuItem>
                    <FirstMenuItem>Project Management</FirstMenuItem>
                    <FirstMenuItem>Assets Management</FirstMenuItem>
                    <FirstMenuItem>Quality Management</FirstMenuItem>
                    <FirstMenuItem>Office Automation</FirstMenuItem>
                    <FirstMenuItem>Human Resource</FirstMenuItem>
                    <FirstMenuItem>Customer Relation Management</FirstMenuItem>
                </Menu>
            </SidebarLayout>
        </>
    );
};

export default Sidebar;

const FirstMenuItem = ({ children }: any) => {
    return (
        <MenuItem>
            <span>{children}</span>
            <MenuArrow>
                <DownOutlined />
            </MenuArrow>
        </MenuItem>
    );
};

const SidebarLayout = BaseStyled(styled.div<DivProps>`
    width: 280px;
    height: 100%;
    background-color: ${(props) => props.primarycolors?.[9]};
    box-shadow: 6px 0 16px 0 rgba(0, 0, 0, 0.16);
    overflow-y: auto;
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
    user-select: none;
    color: #ffffff70;
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
    right: 20px;
`;
