import Content from "@/views/layout/Content";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <section className="h-screen flex flex-col">
            <div className="h-[56px] leading-[56px] border-b-[1px] border-slate-200 px-3">Header</div>
            <Content>{children}</Content>
        </section>
    );
};

export default Layout;
