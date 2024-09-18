import login from "@/@server/services/system/user/login";

// Login
export async function POST(request: Request) {
    const res = await request.json();

    const result = await login(res);
    console.log("result: ", result);
    if (!result) {
        return new Response(JSON.stringify({ code: 401, message: "Invalid account or password." }), { status: 200 });
    } else if (result?.menus?.length === 0) {
        return new Response(
            JSON.stringify({
                code: 401,
                message: "Login failed. The role has been deleted.",
            }),
            {
                status: 200,
            }
        );
    }

    return new Response(JSON.stringify({ code: 200, data: result }), {
        status: 200,
        headers: { "Set-Cookie": `token=${result.token}; path=/` },
    });
}
