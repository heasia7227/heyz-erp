/* eslint-disable import/no-named-as-default-member */
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";

export const generateToken = (payload: any) => {
    const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || "";
    const expiresIn = process.env.NEXT_PUBLIC_JWT_EXPIRES_IN || "2h";
    const audience = process.env.NEXT_PUBLIC_JWT_AUDIENCE || "";
    const issuer = process.env.NEXT_PUBLIC_JWT_ISSUER || "";

    const token = jwt.sign(payload, secretKey, { expiresIn, audience, issuer });
    return token;
};

export const verifyToken = (request: NextRequest) => {
    const token = request.cookies.get("token")?.value || request.headers.get("Authorization") || "";

    try {
        const decoded = jwtDecode(token);
        return decoded;
    } catch (error) {
        return null;
    }
};
