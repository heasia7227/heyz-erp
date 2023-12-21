export class GetPageQuery {
    constructor(current: number, pageSize: number) {
        const _current = isNaN(current) ? 1 : Number(current);
        const _pageSize = isNaN(pageSize) ? 10 : Number(pageSize);

        this.current = _current;
        this.skip = (_current - 1) * _pageSize;
        this.pageSize = _pageSize;
    }

    current: number;
    skip: number;
    pageSize: number;
}
