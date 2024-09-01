import { Breadcrumb, Card, ConfigProvider, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Menus from "@/views/layout/Menus";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    // colorPrimary: "#00b96b",
                    // borderRadius: 2,
                    // 派生变量，影响范围小
                    // colorBgContainer: "#f6ffed",
                },
            }}
        >
            <section className="h-screen flex flex-col">
                <div className="h-[56px] leading-[56px] border-b-[1px] border-slate-200 px-3">Header</div>
                <div className="flex  bg-slate-200 h-[calc(100vh-56px)]">
                    <div className="w-[257px] h-full overflow-y-hidden hover:overflow-y-auto">
                        <Menus />
                    </div>
                    <div className="flex-1 h-full p-3 flex flex-col gap-3">
                        <Breadcrumb
                            items={[
                                {
                                    href: "",
                                    title: <HomeOutlined />,
                                },
                                {
                                    href: "",
                                    title: "系统管理",
                                },
                                {
                                    title: "用户管理",
                                },
                            ]}
                        />
                        <Card size="small" className="flex-1">
                            {children}
                        </Card>
                    </div>
                </div>
            </section>
        </ConfigProvider>
    );
};

export default Layout;
