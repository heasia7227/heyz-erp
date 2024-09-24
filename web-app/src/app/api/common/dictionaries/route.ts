import { getDictionaries } from "@/@server/services/common/dictionaries";
import { getString } from "@/utils/get-url-query";
import { NextRequest } from "next/server";

// 获取字典
export async function GET(request: NextRequest) {
    const dictionaryType = getString(request, "dictionaryType");

    if (dictionaryType) {
        const result = await getDictionaries(dictionaryType);
        return Response.json({ code: 200, data: result });
    }
    return Response.json({ code: 200, data: [] });
}
