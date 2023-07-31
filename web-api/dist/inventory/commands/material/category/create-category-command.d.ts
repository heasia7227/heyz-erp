export declare class CreateCategoryCommand {
    readonly code: string;
    readonly title: string;
    readonly parentId: string;
    readonly status: string;
    constructor(code: string, title: string, parentId: string, status: string);
}
