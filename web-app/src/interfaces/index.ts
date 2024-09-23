export interface IKeyword {
    keyword?: string;
}

export interface IPage<T> {
    items: T;
    totalCount: number;
}

export interface IBaseTree {
    key: string;
    value: string;
    title: string;
    label: string;
    originTitle: string;
    children: IBaseTree[];
}
