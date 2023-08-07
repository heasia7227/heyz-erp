import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPageQuery } from "src/base.query";
import { CountingTemporary } from "src/inventory/domains/counting/temporary";
import { ResultData } from "src/utils/result-data";

export class GetCountingTemporariesQuery extends GetPageQuery {}

@QueryHandler(GetCountingTemporariesQuery)
export class GetCountingTemporariesQueryHandler implements IQueryHandler<GetCountingTemporariesQuery> {
    constructor(
        @InjectRepository(CountingTemporary) private readonly countingTemporaryRepository: Repository<CountingTemporary>
    ) {}

    async execute(query: GetCountingTemporariesQuery) {
        const [temporaries, total] = await this.countingTemporaryRepository.findAndCount({
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<CountingTemporary> }>(
            { data: temporaries },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
