import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoryDto {
    constructor(id: string, code: string, title: string, parentId: string) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.parentId = parentId;
    }

    @ApiProperty()
    id: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    parentId: string;
}
