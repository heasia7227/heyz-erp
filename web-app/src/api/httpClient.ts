import { AxiosRequestConfig } from "axios";
import delay from "@/utils/delay";
import axios from "./customAxios";

const retries = process.env.REACT_APP_RETRIES || 0;

const API = {
    get: async (url: string, conf?: AxiosRequestConfig) => {
        return await retry("get", url, conf);
    },
    post: async (url: string, data?: any, conf?: AxiosRequestConfig) => {
        return await retry("post", url, data, conf);
    },
    put: async (url: string, data?: any, conf?: AxiosRequestConfig) => {
        return await retry("put", url, data, conf);
    },
    delete: async (url: string, conf?: AxiosRequestConfig) => {
        return await retry("delete", url, conf);
    },
};

const getAxiosInstance = (conf?: AxiosRequestConfig) => {
    const baseURL = conf?.baseURL || process.env.REACT_APP_WEB_API_BASE_URL;
    return axios(baseURL) as any;
};

const retry = async (name: string, url: string, data?: any, conf?: AxiosRequestConfig) => {
    let i = 0;
    let result: any;
    do {
        i > 0 && (await delay(1000 * i));
        result = await getAxiosInstance(conf)[name](url, data, conf);
        i++;
    } while (i <= retries && result?.code === "ERR_NETWORK");
    return result;
};

export { API };
