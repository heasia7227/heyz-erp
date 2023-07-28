import { Controller } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller()
export abstract class BaseController {
    constructor(protected readonly commandBus: CommandBus, protected readonly queryBus: QueryBus) {}
}
