import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { GetPageDto } from "src/base.query.dto";
import { GetCountingTemporariesQuery } from "src/inventory/queries/counting/temporary/get-temporaries.query";

@ApiTags("inventory/counting/temporary")
@Controller("inventory/counting/temporary")
export class TemporaryController extends BaseController {
    @Get("list")
    async list(@Query() getPageDto: GetPageDto) {
        return this.queryBus.execute(new GetCountingTemporariesQuery(getPageDto.current, getPageDto.pageSize));
    }
}
