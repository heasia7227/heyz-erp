import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { BaseStyled, DivProps } from "@/components/BaseStyled";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <>
            <Screen>
                <Sidebar />
                <Section>
                    <Header>
                        <span>English</span>
                    </Header>
                    <Content>
                        <Outlet />
                    </Content>
                </Section>
            </Screen>
        </>
    );
};

export default Layout;

const Screen = styled.div`
    display: flex;
    height: 100vh;
`;

const Section = styled.div`
    flex: 1;
`;

const Header = styled.div`
    height: 49px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: right;
    background-color: #ffffff;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
`;

const Content = styled.div`
    height: calc(100vh - 49px);
    overflow: auto;
`;
