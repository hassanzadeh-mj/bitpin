import axiosClient from "../../axios";

export async function SearchDevice(body: any) {
    return axiosClient
        .get<any>(`device`, {params: body})
        .then(responseBody => ({
            ...responseBody.data,
            successful: true
        }))
        .catch(error => ({
            title: error.response?.data?.title ?? error.message,
            content: null,
            successful: false
        }))
}
