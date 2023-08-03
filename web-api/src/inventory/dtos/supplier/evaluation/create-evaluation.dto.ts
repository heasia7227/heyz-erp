import { ApiProperty } from "@nestjs/swagger";

export class CreateSupplierEvaluationDto {
    constructor(notes: string, score: number, supplierId: string) {
        this.notes = notes;
        this.score = score;
        this.supplierId = supplierId;
    }

    @ApiProperty()
    notes: string;

    @ApiProperty()
    score: number;

    @ApiProperty()
    supplierId: string;
}
