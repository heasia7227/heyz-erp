import Content from "@/views/layout/Content";
import Header from "@/views/layout/Header";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <section className="h-screen flex flex-col">
            <Header />
            <Content>{children}</Content>
        </section>
    );
};

export default Layout;
