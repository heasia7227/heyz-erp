"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoriesHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const result_data_1 = require("../../../../utils/result-data");
const get_categories_1 = require("./get-categories");
let GetCategoriesHandler = exports.GetCategoriesHandler = class GetCategoriesHandler {
    async execute(query) {
        return result_data_1.ResultData.ok([]);
    }
};
exports.GetCategoriesHandler = GetCategoriesHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_categories_1.GetCategories)
], GetCategoriesHandler);
//# sourceMappingURL=get-categories-handler.js.map