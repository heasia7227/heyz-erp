import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { GetPageDto } from "src/base.query.dto";
import { GetInventoriesQuery } from "src/inventory/queries/inventory/get-inventories.query";

@ApiTags("inventory")
@Controller("inventory")
export class InventoryController extends BaseController {
    @Get("list")
    async list(@Query() getPageDto: GetPageDto) {
        return this.queryBus.execute(new GetInventoriesQuery(getPageDto.current, getPageDto.pageSize));
    }
}
