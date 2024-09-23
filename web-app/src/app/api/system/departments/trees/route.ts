import { NextRequest } from "next/server";
import { getString } from "@/utils/get-url-query";
import { getDempartmentTrees } from "@/@server/services/system/department";

// Trees
export async function GET(request: NextRequest) {
    const keyword = getString(request, "keyword");

    const result = await getDempartmentTrees({ keyword });
    return Response.json({ code: 200, data: result });
}
