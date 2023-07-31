"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const create_category_command_handler_1 = require("./material/category/create-category-command-handler");
const disable_category_command_handler_1 = require("./material/category/disable-category-command-handler");
const enable_category_command_handler_1 = require("./material/category/enable-category-command-handler");
const remove_category_command_handler_1 = require("./material/category/remove-category-command-handler");
const update_category_command_handler_1 = require("./material/category/update-category-command-handler");
exports.commands = [
    create_category_command_handler_1.CreateCategoryCommandHandler,
    update_category_command_handler_1.UpdateCategoryCommandHandler,
    remove_category_command_handler_1.RemoveCategoryCommandHandler,
    enable_category_command_handler_1.EnableCategoryCommandHandler,
    disable_category_command_handler_1.DisableCategoryCommandHandler,
];
//# sourceMappingURL=index.js.map