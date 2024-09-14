import { NextRequest } from "next/server";

// Logout
export async function POST(request: NextRequest) {
    return new Response(JSON.stringify({ code: 200 }), {
        status: 200,
        headers: { "Set-Cookie": `token=; path=/` },
    });
}
