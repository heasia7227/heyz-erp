import { ApiProperty } from "@nestjs/swagger";

export class CreateMaterialDto {
    constructor(
        code: string,
        name: string,
        categoryId: string,
        departmentId: string,
        regularMaintenanceFrequency: string,
        status: string
    ) {
        this.code = code;
        this.name = name;
        this.categoryId = categoryId;
        this.departmentId = departmentId;
        this.regularMaintenanceFrequency = regularMaintenanceFrequency;
        this.status = status;
    }

    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    categoryId: string;

    @ApiProperty()
    departmentId: string;

    @ApiProperty()
    regularMaintenanceFrequency: string;

    @ApiProperty({ enum: ["Enable", "Disable"] })
    status: string;
}
