import { NextRequest } from "next/server";
import { getAssignUsers, saveAssignUsers } from "@/@server/services/system/role/assign-users";
import { IGetAssignUsersParams } from "@/interfaces/system/role/assign-users";
import { getNumber, getString } from "@/utils/get-url-query";

// 获取已分配用户
export async function GET(request: NextRequest) {
    const roleId = getNumber(request, "roleId");
    const departmentId = getNumber(request, "departmentId");
    const userName = getString(request, "userName");

    if (roleId) {
        const _params = {
            roleId: Number(roleId!),
            departmentId: departmentId ? Number(departmentId) : departmentId,
            userName,
        } as IGetAssignUsersParams;
        const result = await getAssignUsers(_params);
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}

// 分配用户
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await saveAssignUsers(res);
    return Response.json({ code: 200, data: result });
}
