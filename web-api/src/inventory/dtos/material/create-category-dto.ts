import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    constructor(code: string, title: string, parentId: string) {
        this.code = code;
        this.title = title;
        this.parentId = parentId;
    }

    @ApiProperty()
    code: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    parentId: string;
}
