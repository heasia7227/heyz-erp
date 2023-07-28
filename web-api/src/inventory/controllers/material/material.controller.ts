import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";

@ApiTags("material")
@Controller("material")
export class MaterialController extends BaseController {}
