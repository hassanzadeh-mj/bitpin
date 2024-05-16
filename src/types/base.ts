export type IBaseResponse = {
    title: string;
    successful: true | false;
}


export type ISearchResponseContent<T> ={} & {
    next?: number,
    previous?: number,
    count?: number,
    size?: number,
    page: number,
    pages?: number,
    results: T[],
    title?: string;
    successful?: boolean;
}


export interface ISearchRequest {
    next?: number,
    previous?: number,
    count?: number,
    keyword?: string;
    page?: number,
    size?: number,
    pagination?: boolean
}

