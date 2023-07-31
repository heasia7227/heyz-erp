import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoryDto {
    constructor(id: string, code: string, title: string, parentId: string, status: string) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.parentId = parentId;
        this.status = status;
    }

    @ApiProperty()
    id: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    parentId: string;

    @ApiProperty({ enum: ["Enable", "Disable"] })
    status: string;
}
