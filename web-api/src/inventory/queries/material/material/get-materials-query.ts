import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Material } from "src/inventory/domains/material/material";

export class GetMaterialsQuery {}

@QueryHandler(GetMaterialsQuery)
export class GetMaterialsQueryHandler implements IQueryHandler<GetMaterialsQuery> {
    constructor(@InjectRepository(Material) private readonly materialRepository: Repository<Material>) {}

    async execute(query: GetMaterialsQuery) {
        const materials = await this.materialRepository.find({ where: { status: "Enable" } });
        return ResultData.ok<Array<Material>>(materials);
    }
}
