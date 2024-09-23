import { NextRequest } from "next/server";
import { getUnassignUsers } from "@/@server/services/system/role/assign-users";
import { getNumber, getString } from "@/utils/get-url-query";
import { IGetUnassignUsersParams } from "@/interfaces/system/role/assign-users";

// 获取未分配用户
export async function GET(request: NextRequest) {
    const roleId = getNumber(request, "roleId");
    const departmentId = getNumber(request, "departmentId");
    const userName = getString(request, "userName");

    if (roleId) {
        const _params = { roleId, departmentId, userName } as IGetUnassignUsersParams;

        const result = await getUnassignUsers(_params);
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}
