import { NextRequest } from "next/server";
import { createPlanning, getPlannings } from "@/@server/services/hr/recruiting/planning";

// 获取招聘计划列表
export async function GET(request: NextRequest) {
    const result = await getPlannings({});
    return Response.json({ code: 200, data: result });
}

// 创建招聘计划
export async function POST(request: NextRequest) {
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await createPlanning(res);
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
