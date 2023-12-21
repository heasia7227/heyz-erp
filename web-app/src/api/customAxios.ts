import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "@/utils/getAuth";
import { message } from "antd";

const customAxios = {
    instance: (url: string) => {
        const as = axios.create({
            baseURL: url,
            timeout: 60000,
        });

        as.interceptors.request.use(
            (request) => requestHandler(request),
            (error) => errorHandler(error)
        );

        as.interceptors.response.use(
            (response) => responseHandler(response),
            (error) => errorHandler(error)
        );
        return as;
    },
};

const requestHandler = (request: InternalAxiosRequestConfig) => {
    request.headers.Authorization = "Bearer " + getAccessToken();
    return request;
};

const responseHandler = (response: AxiosResponse) => {
    return response?.data?.data;
};

const errorHandler = async (error: any) => {
    const responseStatus = error?.response?.status;
    if (error.code === "ERR_NETWORK") {
        message.error("");
        return { code: error.code };
    } else if (responseStatus === 401 || responseStatus === 403) {
        location.href = `/`;
    } else if (responseStatus === 500) {
        message.error("");
        return error?.response?.data;
    } else {
        return error?.response?.data;
    }
};

export default customAxios.instance;
