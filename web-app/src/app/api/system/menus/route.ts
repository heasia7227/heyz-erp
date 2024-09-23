import { getMenus } from "@/@server/services/system/menu";
import { NextRequest } from "next/server";

// list
export async function GET(request: NextRequest) {
    const result = await getMenus();
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
