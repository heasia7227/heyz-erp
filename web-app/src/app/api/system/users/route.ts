import { NextRequest } from "next/server";
import list from "@/@server/services/user/list";

// List
export async function GET(request: NextRequest) {
    const result = await list();
    return Response.json({ code: 200, data: result });
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
