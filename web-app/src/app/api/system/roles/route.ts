import { NextRequest } from "next/server";
import { createRole, getRoles } from "@/@server/services/system/role";
import { IGetRolesParams } from "@/interfaces/system/role";
import { getString } from "@/utils/get-url-query";

// list
export async function GET(request: NextRequest) {
    const keyword = getString(request, "keyword");

    const result = await getRoles({ keyword } as IGetRolesParams);
    return Response.json({ code: 200, data: result });
}

// 创建角色
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await createRole(res);
    return Response.json({ code: 200, data: result });
}

// // Update
// export async function PUT(request: NextRequest) {
//     //...
// }

// // Delete
// export async function DELETE(request: NextRequest) {
//     //...
// }
