/// <reference types="react-scripts" />

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_RETRIES: number;
            REACT_APP_WEB_API_BASE_URL: string;
        }
    }
}
export {};
