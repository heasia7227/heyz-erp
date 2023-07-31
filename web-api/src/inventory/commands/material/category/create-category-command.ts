export class CreateCategoryCommand {
    constructor(public readonly code: string, public readonly title: string, public readonly parentId: string) {}
}
