import { ApiProperty } from "@nestjs/swagger";

export class CreateSupplierContractDto {
    constructor(title: string, totalPrice: number, attachment: string, supplierId: string) {
        this.title = title;
        this.totalPrice = totalPrice;
        this.supplierId = supplierId;
    }

    @ApiProperty()
    title: string;

    @ApiProperty()
    totalPrice: number;

    @ApiProperty()
    supplierId: string;

    @ApiProperty({ type: "string", format: "binary" })
    file: any;
}
