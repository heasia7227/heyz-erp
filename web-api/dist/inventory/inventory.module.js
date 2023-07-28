"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const commands_1 = require("./commands");
const queries_1 = require("./queries");
const controllers_1 = require("./controllers");
let InventoryModule = exports.InventoryModule = class InventoryModule {
};
exports.InventoryModule = InventoryModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule],
        controllers: [...controllers_1.controllers],
        providers: [...commands_1.commands, ...queries_1.queries],
    })
], InventoryModule);
//# sourceMappingURL=inventory.module.js.map