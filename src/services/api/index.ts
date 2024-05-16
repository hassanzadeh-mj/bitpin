
export function defaultCatch(error: any): any {
    return {
        title: error.response?.data?.title ?? error.message,
        successful: false
    }
}
