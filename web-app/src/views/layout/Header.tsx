"use client";

import { Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import httpFetch from "@/utils/http-fetch";
import { LogoutOutlined } from "@ant-design/icons";

const Header = () => {
    const router = useRouter();

    const onLogout = async () => {
        await httpFetch("/system/logout", {
            method: "POST",
        });
        localStorage.clear();
        router.push("/");
    };

    return (
        <>
            <div className="h-[56px] leading-[56px] border-b-[1px] border-slate-200 px-3 flex justify-between">
                <div className="flex items-center">
                    <Image src={"/imgs/logo.png"} alt="" width={32} height={32} />
                    企业资源计划
                </div>
                <div className="cursor-pointer" onClick={onLogout}>
                    <Space>
                        <LogoutOutlined />
                        登出
                    </Space>
                </div>
            </div>
        </>
    );
};

export default Header;
