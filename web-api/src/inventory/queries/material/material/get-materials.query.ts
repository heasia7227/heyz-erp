import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Material } from "src/inventory/domains/material/material";
import { GetPageQuery } from "src/base.query";

export class GetMaterialsQuery extends GetPageQuery {}

@QueryHandler(GetMaterialsQuery)
export class GetMaterialsQueryHandler implements IQueryHandler<GetMaterialsQuery> {
    constructor(@InjectRepository(Material) private readonly materialRepository: Repository<Material>) {}

    async execute(query: GetMaterialsQuery) {
        const [materials, total] = await this.materialRepository.findAndCount({
            where: { status: "Enable" },
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<Array<Material>>(materials, {
            total,
            current: query.current,
            pageSize: query.pageSize,
        });
    }
}
