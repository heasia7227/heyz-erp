import { ApiProperty } from "@nestjs/swagger";

export class UpdateWarehouseDto {
    constructor(
        id: string,
        title: string,
        departmentId: string,
        address: string,
        position: string,
        level: string,
        administrator: string,
        contactNumber: string,
        status: string
    ) {
        this.id = id;
        this.title = title;
        this.departmentId = departmentId;
        this.address = address;
        this.position = position;
        this.level = level;
        this.administrator = administrator;
        this.contactNumber = contactNumber;
        this.status = status;
    }

    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    departmentId: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    level: string;

    @ApiProperty()
    administrator: string;

    @ApiProperty()
    contactNumber: string;

    @ApiProperty({ enum: ["Enable", "Disable"] })
    status: string;
}
