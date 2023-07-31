export declare class UpdateCategoryCommand {
    readonly id: string;
    readonly code: string;
    readonly title: string;
    readonly parentId: string;
    readonly status: string;
    constructor(id: string, code: string, title: string, parentId: string, status: string);
}
