"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const create_category_command_1 = require("./material/category/create-category-command");
const disable_category_command_1 = require("./material/category/disable-category-command");
const enable_category_command_1 = require("./material/category/enable-category-command");
const remove_category_command_1 = require("./material/category/remove-category-command");
const update_category_command_1 = require("./material/category/update-category-command");
exports.commands = [
    create_category_command_1.CreateCategoryCommandHandler,
    update_category_command_1.UpdateCategoryCommandHandler,
    remove_category_command_1.RemoveCategoryCommandHandler,
    enable_category_command_1.EnableCategoryCommandHandler,
    disable_category_command_1.DisableCategoryCommandHandler,
];
//# sourceMappingURL=index.js.map