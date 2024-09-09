import trees from "@/@server/services/department/trees";
import { NextRequest } from "next/server";

// Trees
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const keyword = searchParams.get("keyword");
    console.log("keyword: ", keyword);

    const result = await trees({ keyword });
    return Response.json({ code: 200, data: result });
}
