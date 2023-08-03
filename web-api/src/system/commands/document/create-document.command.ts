import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import dayjs from "dayjs";
import { Document } from "src/system/domains/document/document";
import { uuid } from "src/utils/uuid";
import { Repository } from "typeorm";

export class CreateDocumentCommand {
    constructor(
        public readonly originalName: string,
        public readonly storeName: string,
        public readonly mimetype: string,
        public readonly destination: string,
        public readonly size: number,
        public readonly moduleName: string,
        public readonly createUserId: string
    ) {}
}

@CommandHandler(CreateDocumentCommand)
export class CreateDocumentCommandHandler implements ICommandHandler<CreateDocumentCommand> {
    constructor(@InjectRepository(Document) private readonly documentRepository: Repository<Document>) {}

    async execute(command: CreateDocumentCommand) {
        const temporary = new Document();
        temporary.id = uuid();
        temporary.originalName = command.originalName;
        temporary.storeName = command.storeName;
        temporary.mimetype = command.mimetype;
        temporary.destination = command.destination;
        temporary.size = command.size;
        temporary.moduleName = command.moduleName;
        // TODO Department Table
        // temporary.createDepartment =
        // TODO User Table
        // temporary.createUser =
        temporary.createDateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

        const document = await this.documentRepository.save(temporary);
        return document;
    }
}
