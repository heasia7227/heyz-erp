import { NextRequest } from "next/server";
import { createDepartment } from "@/@server/services/system/department";

// // Details
// export async function GET(request: NextRequest) {
//     //...
// }

// Create
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await createDepartment(res);
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
