import { NextRequest } from "next/server";
import { getConfigureMenus, saveConfigureMenus } from "@/@server/services/system/role/configure-menus";
import { getNumber } from "@/utils/get-url-query";

// 获取已配置菜单
export async function GET(request: NextRequest) {
    const roleId = getNumber(request, "roleId");

    if (roleId) {
        const result = await getConfigureMenus(Number(roleId));
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}

// 配置菜单
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await saveConfigureMenus(res);
    return Response.json({ code: 200, data: result });
}
