import configureMenus from "@/@server/services/system/role/configure-menus";
import getMenus from "@/@server/services/system/role/get-menus";
import { NextRequest } from "next/server";

// 获取已分配菜单
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const roleId = searchParams.get("roleId");

    if (roleId) {
        const result = await getMenus(Number(roleId));
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}

// 分配菜单
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await configureMenus(res);
    return Response.json({ code: 200, data: result });
}
