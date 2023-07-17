import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Screen>
                <Sidebar />
                <Section>
                    <Header />
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

const Content = styled.div`
    height: calc(100vh - 49px);
    overflow: auto;
    padding: 8px 16px;
`;
