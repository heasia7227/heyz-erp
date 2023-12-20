import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPageQuery } from "src/base.query";
import { ResultData } from "src/utils/result-data";
import { CountingRegular } from "src/inventory/domains/counting/regular";

export class GetCountingRegularsQuery extends GetPageQuery {}

@QueryHandler(GetCountingRegularsQuery)
export class GetCountingRegularsQueryHandler implements IQueryHandler<GetCountingRegularsQuery> {
    constructor(
        @InjectRepository(CountingRegular) private readonly countingRegularRepository: Repository<CountingRegular>
    ) {}

    async execute(query: GetCountingRegularsQuery) {
        const [regulars, total] = await this.countingRegularRepository.findAndCount({
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<CountingRegular> }>(
            { data: regulars },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
