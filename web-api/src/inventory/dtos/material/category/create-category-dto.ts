import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    constructor(code: string, title: string, parentId: string, status: string) {
        this.code = code;
        this.title = title;
        this.parentId = parentId;
        this.status = status;
    }

    @ApiProperty()
    code: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    parentId: string;

    @ApiProperty({ enum: ["Enable", "Disable"] })
    status: string;
}
