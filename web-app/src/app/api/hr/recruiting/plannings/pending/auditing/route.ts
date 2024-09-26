import { NextRequest } from "next/server";
import { getRecruitingPlanningPendingAuditing } from "@/@server/services/hr/recruiting/planning/pendingAuditing";

// 获取待招聘计划列表
export async function GET(request: NextRequest) {
    const employeeId = request.headers.get("employeeId");
    if (employeeId) {
        const result = await getRecruitingPlanningPendingAuditing(Number(employeeId));
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}

// // Create
// export async function POST(request: NextRequest) {
//     //...
// }

// // Update
// export async function PUT(request: NextRequest) {
//     //...
// }

// // Delete
// export async function DELETE(request: NextRequest) {
//     //...
// }
