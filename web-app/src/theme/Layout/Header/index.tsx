import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useThemeController } from "@/theme";

const languages = ["English", "Chinese"];

const Header = () => {
    const themeController = useThemeController();

    return (
        <>
            <HeaderLayout>
                <Dropdown
                    menu={{
                        items: languages.map((item) => {
                            return { label: item, key: item };
                        }),
                        onClick: (info) => {
                            themeController.setLanguage && themeController.setLanguage(info.key);
                        },
                    }}
                    trigger={["click"]}
                >
                    <Space style={{ cursor: "pointer" }}>
                        <span>{themeController.language}</span>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </HeaderLayout>
        </>
    );
};

export default Header;

const HeaderLayout = styled.div`
    height: 49px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: right;
    background-color: #ffffff;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
`;
