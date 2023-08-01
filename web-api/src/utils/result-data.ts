import { ApiProperty } from "@nestjs/swagger";

export class ResultData<T> {
    constructor(code = 200, msg?: string, data?: T) {
        this.code = code;
        this.msg = msg || "ok";
        this.data = data || null;
    }

    @ApiProperty({ type: "number", default: 200 })
    code: number;

    @ApiProperty({ type: "string", default: "ok" })
    msg?: string;

    @ApiProperty({ default: null })
    data?: T;

    static ok<T>(data?: T, msg?: string): ResultData<T> {
        return new ResultData<T>(200, msg, data);
    }

    static okList<T>(data?: T, page?: IPage, msg?: string): ResultData<{ data: T } & IPage> {
        return new ResultData<{ data: T } & IPage>(200, msg, { data, ...page });
    }

    static failure<T>(data?: T, msg?: string): ResultData<T> {
        return new ResultData<T>(500, msg || "failure", data);
    }
}

export interface IPage {
    total: number;
    current: number;
    pageSize: number;
}
