import { NextRequest } from "next/server";
import list from "@/@server/services/system/user/list";
import create from "@/@server/services/system/user/create";

// List
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const departmentId = searchParams.get("departmentId");
    const userName = searchParams.get("userName");

    const result = await list({ departmentId, userName });
    return Response.json({ code: 200, data: result });
}

// Create
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await create(res);
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
