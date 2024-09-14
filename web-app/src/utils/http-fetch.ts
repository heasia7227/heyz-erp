import { getToken } from "./get-cookies";

interface IOptions extends RequestInit {
    params?: Record<string, any>;
}

const baseURL = `${process.env.NEXT_PUBLIC_APP_URL}/api`;

const httpFetch = async (url: string, options: IOptions = {}): Promise<any> => {
    try {
        if (options.params) {
            const _params: any = {};
            Object.entries(options.params).forEach((objs) => {
                if (objs[1]) {
                    _params[objs[0]] = objs[1];
                }
            });

            const params = new URLSearchParams(_params).toString();
            url = `${url}?${params}`;
        }

        let token: any = "";
        if (typeof window !== "undefined") {
            token = localStorage.getItem("token");
        } else {
            token = getToken();
        }

        const result = await fetch(`${baseURL}${url}`, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: token || "",
            },
        });

        const response = await result.json();
        if (response?.code === 200) {
            return response?.data;
        }
    } catch (error) {
        return null;
    }
};

export default httpFetch;
