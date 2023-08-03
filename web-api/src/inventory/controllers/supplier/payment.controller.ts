import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { diskStorage } from "multer";
import { BaseController } from "src/base.controller";
import { CreateSupplierPaymentCommand } from "src/inventory/commands/supplier/payment/create-payment.command";
import { CreateSupplierPaymentDto } from "src/inventory/dtos/supplier/payment/create-payment.dto";
import { GetSupplierPaymentsDto } from "src/inventory/dtos/supplier/payment/get-payment.dto";
import { GetSupplierPaymentsQuery } from "src/inventory/queries/supplier/payment/get-payment.query";
import { CreateDocumentCommand } from "src/system/commands/document/create-document.command";
import { Document } from "src/system/domains/document/document";
import { uuid } from "src/utils/uuid";

@ApiTags("supplier/payment")
@Controller("supplier/payment")
export class SupplierPaymentController extends BaseController {
    @Get("list")
    async list(@Query() getSupplierPaymentsDto: GetSupplierPaymentsDto) {
        return this.queryBus.execute(
            new GetSupplierPaymentsQuery(
                getSupplierPaymentsDto.current,
                getSupplierPaymentsDto.pageSize,
                getSupplierPaymentsDto.supplierId
            )
        );
    }

    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(
        FileInterceptor("file", {
            storage: diskStorage({
                destination: `./uploads/supplier/payment`,
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
        @Body() createSupplierPaymentDto: CreateSupplierPaymentDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        const document: Document = await this.commandBus.execute(
            new CreateDocumentCommand(
                file.originalname,
                file.fieldname,
                file.mimetype,
                file.destination,
                file.size,
                "SUPPLIER_PAYMENT",
                "123"
            )
        );

        return this.commandBus.execute(
            new CreateSupplierPaymentCommand(
                createSupplierPaymentDto.notes,
                createSupplierPaymentDto.paidAmount,
                document.id,
                createSupplierPaymentDto.supplierId
            )
        );
    }
}
