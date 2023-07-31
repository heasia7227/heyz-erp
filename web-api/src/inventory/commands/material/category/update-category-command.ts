export class UpdateCategoryCommand {
    constructor(
        public readonly id: string,
        public readonly code: string,
        public readonly title: string,
        public readonly parentId: string,
        public readonly status: string
    ) {}
}
