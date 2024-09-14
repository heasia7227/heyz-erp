import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

export function middleware(request: NextRequest) {
    // console.log("middleware", request.url);
    if (
        request.url?.startsWith(`${process.env.NEXT_PUBLIC_APP_URL}/api`) &&
        !request.url?.startsWith(`${process.env.NEXT_PUBLIC_APP_URL}/api/system/login`)
    ) {
        const payload: any = verifyToken(request);
        if (!payload) {
            return new Response(JSON.stringify({ code: 401, message: "Token is invalid." }), { status: 200 });
        }
        const response = NextResponse.next();
        response.headers.set("userId", payload?.id);
        return response;
    } else {
        return NextResponse.next();
    }
}
