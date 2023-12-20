import { IUser } from "@/interfaces/system/IUser";
import { jwtDecode } from "jwt-decode";

export const getAuth = () => {
    const authString = localStorage.getItem("auth") || "{}";
    return JSON.parse(authString);
};

export const getAccessToken = () => {
    const auth = getAuth();
    return auth?.access_token;
};

export const getIdToken = () => {
    const auth = getAuth();
    return auth?.id_token;
};

export const getRefreshToken = () => {
    const auth = getAuth();
    return auth?.refresh_token;
};

export const getUser = () => {
    try {
        const user = jwtDecode<IUser>(getIdToken());
        return user;
    } catch (e) {
        console.log(e); //Invalid token specified
        return {} as IUser;
    }
};
