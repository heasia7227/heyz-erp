import { NextRequest } from "next/server";
import list from "@/@server/services/hr/employee-files/list";
import create from "@/@server/services/hr/employee-files/create";

// List
export async function GET(request: NextRequest) {
    const result = await list();
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
