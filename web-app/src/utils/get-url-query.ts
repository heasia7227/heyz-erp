import { NextRequest } from "next/server";

export const getSearchParams = (request: NextRequest): URLSearchParams => {
    return request.nextUrl.searchParams;
};

export const getNumber = (request: NextRequest, name: string) => {
    const searchParams = getSearchParams(request);
    const value = searchParams.get(name);

    if (value && /^\d+$/.test(value)) {
        return Number(value);
    }
    return undefined;
};

export const getString = (request: NextRequest, name: string) => {
    const searchParams = getSearchParams(request);
    const value = searchParams.get(name);
    if (value) {
        return String(value);
    }
    return undefined;
};
