import { ApiProperty } from "@nestjs/swagger";

export class GetPageDto {
    constructor(current: number, pageSize: number) {
        this.current = current;
        this.pageSize = pageSize;
    }

    @ApiProperty()
    current: number;

    @ApiProperty()
    pageSize: number;
}
