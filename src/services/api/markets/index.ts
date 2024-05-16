import {ISearchResponse} from "@/types/base";
import axiosClient from "../../axios";
import {defaultCatch} from "../index";
import {IMarketsTypeRequest, IMarketsTypeResponse} from "./markets.type";

const url ='mkt/markets/'

export async function MarketsGet(request :IMarketsTypeRequest): Promise<ISearchResponse<IMarketsTypeResponse>> {
    return await axiosClient
        .get<ISearchResponse<IMarketsTypeResponse>>(url , {params :request})
        .then(responseBody => ({...responseBody.data, successful: true}))
        .catch(defaultCatch)
}
