export declare class ResultData<T> {
    constructor(code?: number, msg?: string, data?: T);
    code: number;
    msg?: string;
    data?: T;
    static ok<T>(data?: T, msg?: string): ResultData<T>;
    static failure<T>(data?: T, msg?: string): ResultData<T>;
}
