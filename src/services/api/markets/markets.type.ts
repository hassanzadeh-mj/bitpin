import {ISearchRequest} from "@/types/base";

export interface IMarketsTypeRequest extends ISearchRequest {

}

export interface ICurrency {
    code: string
    color: string
    decimal: number
    decimal_amount: number
    decimal_irt: number
    etf: boolean
    for_binvest: boolean
    for_loan: boolean
    for_stake: boolean
    for_test: boolean
    high_risk: boolean
    id: number
    image: string
    recommend_for_deposit_weight: number
    show_high_risk: boolean
    tags: []
    title: string
    title_fa: string
    tradable: boolean
    withdraw_commission: string
}

export interface IMarketsTypeResponse {
    all_time_high: string
    circulating_supply: string
    code: string
    currency1: ICurrency
    currency2: ICurrency
    for_test: boolean
    freshness_weight: number
    id: number
    internal_price_info: { created_at: number, price: string, change: number, min: string, max: string }
    market_cap: string
    order_book_info: { created_at: number, price: string, change: number, min: string, max: string }
    otc_buy_percent: string
    otc_market: boolean
    otc_max_buy_amount: string
    otc_max_sell_amount: string
    otc_sell_percent: string
    popularity_weight: number
    price: string
    price_info: { created_at: number, price: string, change: number, min: string, max: string }
    text: string
    title: string
    title_fa: string
    tradable: boolean
    trading_view_source: string
    trading_view_symbol: string
    volume_24h: string
}
