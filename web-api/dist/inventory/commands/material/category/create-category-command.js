"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryCommandHandler = exports.CreateCategoryCommand = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const cqrs_1 = require("@nestjs/cqrs");
const result_data_1 = require("../../../../utils/result-data");
const category_1 = require("../../../domains/material/category");
const uuid_1 = require("../../../../utils/uuid");
class CreateCategoryCommand {
    constructor(code, title, parentId, status) {
        this.code = code;
        this.title = title;
        this.parentId = parentId;
        this.status = status;
    }
}
exports.CreateCategoryCommand = CreateCategoryCommand;
let CreateCategoryCommandHandler = exports.CreateCategoryCommandHandler = class CreateCategoryCommandHandler {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(command) {
        const temporary = new category_1.Category();
        temporary.id = (0, uuid_1.uuid)();
        temporary.title = command.title;
        temporary.code = command.code;
        temporary.parentId = command.parentId || "";
        temporary.status = command.status;
        const category = await this.categoryRepository.save(temporary);
        return result_data_1.ResultData.ok(category, "Created success.");
    }
};
exports.CreateCategoryCommandHandler = CreateCategoryCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(CreateCategoryCommand),
    __param(0, (0, typeorm_2.InjectRepository)(category_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CreateCategoryCommandHandler);
//# sourceMappingURL=create-category-command.js.map