import { Breadcrumb, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Menus from "@/views/layout/Menus";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    console.log("1111111");

    return (
        <section className="h-screen flex flex-col">
            <div className="h-[56px] leading-[56px] border-b-[1px] border-slate-200 px-3">Header</div>
            <div className="flex  bg-slate-200 h-[calc(100vh-56px)]">
                <div className="w-[257px] h-full">
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
    );
};

export default Layout;
