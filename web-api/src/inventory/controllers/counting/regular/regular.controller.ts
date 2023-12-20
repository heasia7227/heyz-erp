import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { GetPageDto } from "src/base.query.dto";
import { GetCountingRegularsQuery } from "src/inventory/queries/counting/regular/get-regulars.query";

@ApiTags("inventory/counting/regular")
@Controller("inventory/counting/regular")
export class RegularController extends BaseController {
    @Get("list")
    async list(@Query() getPageDto: GetPageDto) {
        return this.queryBus.execute(new GetCountingRegularsQuery(getPageDto.current, getPageDto.pageSize));
    }
}
