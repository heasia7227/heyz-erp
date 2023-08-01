import { ApiProperty } from "@nestjs/swagger";

export class UpdateSupplierDto {
    constructor(
        id: string,
        title: string,
        responsiblePerson: string,
        gender: string,
        contactNumber: string,
        address: string,
        remarks: string,
        webUrl: string
    ) {
        this.id = id;
        this.title = title;
        this.responsiblePerson = responsiblePerson;
        this.gender = gender;
        this.contactNumber = contactNumber;
        this.address = address;
        this.remarks = remarks;
        this.webUrl = webUrl;
    }

    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    responsiblePerson: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    contactNumber: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    remarks: string;

    @ApiProperty()
    webUrl: string;
}
