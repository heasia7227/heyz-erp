import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

export function middleware(request: NextRequest) {
    if (
        request.url?.startsWith(`${process.env.NEXT_PUBLIC_APP_URL}/api`) &&
        !request.url?.startsWith(`${process.env.NEXT_PUBLIC_APP_URL}/api/system/login`) &&
        !request.url?.startsWith(`${process.env.NEXT_PUBLIC_APP_URL}/api/system/logout`)
    ) {
        const payload: any = verifyToken(request);
        if (!payload) {
            //Token is invalid.
            return new Response(JSON.stringify({ code: 401, message: "无效的Token！" }), { status: 200 });
        }

        // const _now = new Date().getTime();
        // if (_now > Number(payload.exp) * 1000) {
        //     //Token has expired.
        //     return new Response(JSON.stringify({ code: 401, message: "Token已过期！" }), { status: 200 });
        // }

        const response = NextResponse.next();
        response.headers.set("employeeId", payload?.employeeId);
        return response;
    } else {
        return NextResponse.next();
    }
}
