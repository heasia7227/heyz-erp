import { ApiProperty } from "@nestjs/swagger";

export class CreateSupplierPaymentDto {
    constructor(notes: string, paidAmount: number, supplierId: string) {
        this.notes = notes;
        this.paidAmount = paidAmount;
        this.supplierId = supplierId;
    }

    @ApiProperty()
    notes: string;

    @ApiProperty()
    paidAmount: number;

    @ApiProperty()
    supplierId: string;

    @ApiProperty({ type: "string", format: "binary" })
    file: any;
}
