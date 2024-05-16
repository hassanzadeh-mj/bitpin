export type IBaseResponse = {
    title: string;
    successful: true | false;
}

export type IResponse<T> = {
    content?: T;
} & IBaseResponse

export type IListResponse<T> = {} & IResponse<T[]>

export type ISearchResponse<T> = {} & IResponse<ISearchResponseContent<T>>

export type ISearchResponseContent<T> = {
    next: number,
    previous: number,
    count: number,
    size: number,
    results: T[],
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

