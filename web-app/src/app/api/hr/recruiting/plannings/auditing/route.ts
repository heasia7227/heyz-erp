import { NextRequest } from "next/server";
import { getNumber } from "@/utils/get-url-query";
import {
    createRecruitingPlanningAuditing,
    getRecruitingPlanningAuditing,
} from "@/@server/services/hr/recruiting/planning/auditing";

// 获取招聘计划审批配置
export async function GET(request: NextRequest) {
    const planningId = getNumber(request, "planningId");

    if (planningId) {
        const result = await getRecruitingPlanningAuditing(planningId);
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}

// create
export async function POST(request: NextRequest) {
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await createRecruitingPlanningAuditing(res);
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
