import {IBaseResponse} from "@/types/base";

export function defaultCatch(error: any): IBaseResponse {
    return {
        title: error.response?.data?.title ?? error.message,
        successful: false
    }
}
