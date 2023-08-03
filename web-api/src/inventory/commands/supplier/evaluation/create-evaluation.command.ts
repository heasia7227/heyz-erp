import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SupplierEvaluation } from "src/inventory/domains/supplier/evaluation";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { uuid } from "src/utils/uuid";

export class CreateSupplierEvaluationCommand {
    constructor(public readonly notes: string, public readonly score: number, public readonly supplierId: string) {}
}

@CommandHandler(CreateSupplierEvaluationCommand)
export class CreateSupplierEvaluationCommandHandler implements ICommandHandler<CreateSupplierEvaluationCommand> {
    constructor(
        @InjectRepository(SupplierEvaluation)
        private readonly spplierEvaluationRepository: Repository<SupplierEvaluation>,
        @InjectRepository(Supplier) private readonly spplierRepository: Repository<Supplier>
    ) {}

    async execute(command: CreateSupplierEvaluationCommand) {
        const temporary = new SupplierEvaluation();
        temporary.id = uuid();
        temporary.score = command.score;
        temporary.notes = command.notes;
        temporary.supplier = await this.spplierRepository.findOne({ where: { id: command.supplierId } });

        const evaluation = await this.spplierEvaluationRepository.save(temporary);
        return ResultData.ok<SupplierEvaluation>(evaluation, "Created success.");
    }
}
