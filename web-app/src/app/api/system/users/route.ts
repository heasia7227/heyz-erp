import { NextRequest } from "next/server";
import { createAccount, getUsers } from "@/@server/services/system/user";
import { getNumber, getString } from "@/utils/get-url-query";

// List
export async function GET(request: NextRequest) {
    const departmentId = getNumber(request, "departmentId");
    const userName = getString(request, "userName");

    const result = await getUsers({ departmentId, userName });
    return Response.json({ code: 200, data: result });
}

// 分配账号
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await createAccount(res);
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
