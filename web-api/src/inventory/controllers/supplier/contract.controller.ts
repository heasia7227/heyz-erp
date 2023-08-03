import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { diskStorage } from "multer";
import { BaseController } from "src/base.controller";
import { CreateSupplierContractCommand } from "src/inventory/commands/supplier/contract/create-contract.command";
import { CreateSupplierContractDto } from "src/inventory/dtos/supplier/contract/create-contract.dto";
import { GetSupplierContractsDto } from "src/inventory/dtos/supplier/contract/get-contracts.dto";
import { GetSupplierContractsQuery } from "src/inventory/queries/supplier/contract/get-contracts.query";
import { uuid } from "src/utils/uuid";
import { CreateDocumentCommand } from "src/system/commands/document/create-document.command";
import { Document } from "src/system/domains/document/document";

@ApiTags("supplier/contract")
@Controller("supplier/contract")
export class SupplierContractController extends BaseController {
    @Get("list")
    async list(@Query() getSupplierContractsDto: GetSupplierContractsDto) {
        return this.queryBus.execute(
            new GetSupplierContractsQuery(
                getSupplierContractsDto.current,
                getSupplierContractsDto.pageSize,
                getSupplierContractsDto.supplierId
            )
        );
    }

    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(
        FileInterceptor("file", {
            storage: diskStorage({
                destination: `./uploads/supplier/contract`,
                filename: (req, file, cb) => {
                    const originalName = file.originalname;
                    const suffix = originalName.substring(originalName.lastIndexOf("."));
                    const newName = `${uuid()}${suffix}`;
                    return cb(null, newName);
                },
            }),
        })
    )
    async create(
        @Body() createSupplierContractDto: CreateSupplierContractDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        const document: Document = await this.commandBus.execute(
            new CreateDocumentCommand(
                file.originalname,
                file.fieldname,
                file.mimetype,
                file.destination,
                file.size,
                "SUPPLIER_CONTRACT",
                "123"
            )
        );

        return this.commandBus.execute(
            new CreateSupplierContractCommand(
                createSupplierContractDto.title,
                createSupplierContractDto.totalPrice,
                document.id,
                createSupplierContractDto.supplierId
            )
        );
    }
}
