import { NextRequest } from "next/server";
import getUnassignUsers from "@/@server/services/system/role/get-unassign-users";

// 获取已分配用户
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const roleId = searchParams.get("roleId");
    const departmentId = searchParams.get("departmentId");
    const userName = searchParams.get("userName");

    const result = await getUnassignUsers({ roleId, departmentId, userName });
    return Response.json({ code: 200, data: result });
}
