export class GetPageQuery {
    constructor(current: number, pageSize: number) {
        this.current = current;
        this.skip = (current - 1) * pageSize;
        this.pageSize = pageSize;
    }

    current: number;
    skip: number;
    pageSize: number;
}
