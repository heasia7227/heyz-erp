"use client";

import Link from "next/link";

const DetailsIntroduction = () => {
    return (
        <>
            <div className="h-screen bg-gradient-to-br from-cyan-100 to-blue-300">
                <div className="w-[1366px] mx-auto">
                    <div className="h-[56px] leading-[56px] flex">
                        <div className="flex-1">左侧</div>
                        <div>
                            <Link href="/login">免费试用</Link>
                        </div>
                    </div>
                    <div>内容介绍</div>
                </div>
            </div>
        </>
    );
};

export default DetailsIntroduction;
