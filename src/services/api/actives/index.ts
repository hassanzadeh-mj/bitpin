import { ISearchResponseContent} from "@/types/base";
import {defaultCatch} from "../index";
import axiosActivesClient from "../../axiosActives";
import {IOrderRequest, IOrderResponse, ISellResponse, ITradesResponse} from "./actives.type";

const url ='mth/'

export async function OrderGet(): Promise<ISearchResponseContent<IOrderResponse>> {
    return await axiosActivesClient
        .get<ISearchResponseContent<IOrderResponse>>(`${url}actives/market_id/?type=sell` )
        .then(responseBody => ({...responseBody.data, successful: true}))
        .catch(defaultCatch)
}
export async function SellGet(): Promise<ISearchResponseContent<ISellResponse>> {
    return await axiosActivesClient
        .get<ISearchResponseContent<ISellResponse>>(`${url}actives/market_id/?type=buy`  )
        .then(responseBody => ({...responseBody.data, successful: true}))
        .catch(defaultCatch)
}

export async function TradesGet(): Promise<ISearchResponseContent<ITradesResponse>> {
    return await axiosActivesClient
        .get<ISearchResponseContent<ITradesResponse>>(`${url}matches/market_id/`  )
        .then(responseBody => ({...responseBody.data, successful: true}))
        .catch(defaultCatch)
}
