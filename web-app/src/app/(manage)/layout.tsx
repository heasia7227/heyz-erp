import { Button, ConfigProvider } from "antd";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: "#00b96b",
                    borderRadius: 2,

                    // 派生变量，影响范围小
                    colorBgContainer: "#f6ffed",
                },
            }}
        >
            <section>
                <nav>
                    <Button type="primary">Primary</Button>
                </nav>

                {children}
            </section>
        </ConfigProvider>
    );
};

export default Layout;
