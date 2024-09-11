"use client";

import { useEffect, useState } from "react";
import { Breadcrumb, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";
import Menus from "./Menus";
import { usePathname } from "next/navigation";

interface IProps {
    children: React.ReactNode;
}

const Content = ({ children }: IProps) => {
    const pathname = usePathname();
    const [menus, setMenus] = useState<any[]>([]);
    const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);

    useEffect(() => {
        getMenus();
    }, []);

    useEffect(() => {
        console.log(`Routing to ${pathname}`);
        if (pathname && menus?.length > 0) {
            getBreadcrumbs();
        }
    }, [pathname, menus]);

    const getMenus = async () => {
        const result = await httpFetch("/api/system/menus");
        setMenus(result);
    };

    const getBreadcrumbs = () => {
        const baseItem = menus.find((item) => item.path === pathname);
        const parents = findParent(baseItem);
        const _breadcrumbs = [baseItem, ...parents].reverse();
        setBreadcrumbs(_breadcrumbs);
    };

    const findParent = (currentItem: any): any[] => {
        const parentItem = menus.find((item) => item.id === currentItem.parentId);
        if (parentItem.parentId) {
            const parents = findParent(parentItem);
            return [parentItem, ...parents];
        }
        return [parentItem];
    };

    return (
        <>
            <div className="flex bg-slate-200 h-[calc(100vh-56px)]">
                <div className="w-[257px] h-full">
                    <Menus menus={menus} />
                </div>
                <div className="flex-1 h-full p-3 flex flex-col gap-3">
                    <Breadcrumb
                        items={[
                            {
                                href: "",
                                title: <HomeOutlined />,
                            },
                            ...breadcrumbs?.map((item) => ({ title: item.title })),
                        ]}
                    />
                    <Card size="small" className="flex-1">
                        {children}
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Content;
