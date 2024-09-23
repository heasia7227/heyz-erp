import { NextRequest } from "next/server";
import { createEmployeeFile, getEmployeeFiles } from "@/@server/services/hr/employee-files";

// List
export async function GET(request: NextRequest) {
    const result = await getEmployeeFiles();
    return Response.json({ code: 200, data: result });
}

// Create
export async function POST(request: NextRequest) {
    // Get body params
    const res = await request.json();
    res.createBy = request.headers.get("employeeId");

    const result = await createEmployeeFile(res);
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
