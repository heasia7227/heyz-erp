import { NextRequest } from "next/server";
import getUsers from "@/@server/services/system/role/get-users";
import assignUsers from "@/@server/services/system/role/assign-users";

// 获取已分配用户
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const roleId = searchParams.get("roleId");
    const departmentId = searchParams.get("departmentId");
    const userName = searchParams.get("userName");

    if (roleId) {
        const result = await getUsers({ roleId, departmentId, userName });
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}

// 分配用户
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await assignUsers(res);
    return Response.json({ code: 200, data: result });
}
