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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const base_controller_1 = require("../../../base.controller");
const create_category_dto_1 = require("../../dtos/material/create-category-dto");
const create_category_command_1 = require("../../commands/material/category/create-category-command");
const get_categories_query_1 = require("../../queries/material/category/get-categories-query");
let CategoryController = exports.CategoryController = class CategoryController extends base_controller_1.BaseController {
    async list() {
        return this.queryBus.execute(new get_categories_query_1.GetCategoriesQuery());
    }
    async create(createCategoryDto) {
        return this.commandBus.execute(new create_category_command_1.CreateCategoryCommand(createCategoryDto.code, createCategoryDto.title, createCategoryDto.parentId));
    }
};
__decorate([
    (0, common_1.Get)("list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)("inventory/material/category"),
    (0, common_1.Controller)("inventory/material/category")
], CategoryController);
//# sourceMappingURL=category.controller.js.map