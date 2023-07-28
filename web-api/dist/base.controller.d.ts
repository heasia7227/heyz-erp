import { CommandBus, QueryBus } from "@nestjs/cqrs";
export declare abstract class BaseController {
    protected readonly commandBus: CommandBus;
    protected readonly queryBus: QueryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
}
