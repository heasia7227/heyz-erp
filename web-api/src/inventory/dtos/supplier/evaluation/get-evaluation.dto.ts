import { ApiProperty } from "@nestjs/swagger";
import { GetPageDto } from "src/base.query.dto";

export class GetSupplierEvaluationsDto extends GetPageDto {
    constructor(current: number, pageSize: number, supplierId: string) {
        super(current, pageSize);
        this.supplierId = supplierId;
    }

    @ApiProperty()
    supplierId: string;
}
