import { NextRequest } from "next/server";
import trees from "@/@server/services/department/trees";

// Trees
export async function GET(request: NextRequest) {
    const result = await trees();
    return Response.json({ code: 200, data: result });
}
