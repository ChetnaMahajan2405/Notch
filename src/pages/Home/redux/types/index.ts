import EApiActionTypes from "config/redux/types/api.types";

export enum SearchActionTypes {
    NOTCH_SEARCH = "NOTCH/SEARCH_DATA",
}

export interface ISearchParams {
    data: any;
}

export interface ISearchData {
    id: number;
    orderBuyerStatus: string;
    deliveryDay: string;
    vendorName: string;
    isPendingVendorOnboarding: boolean;
    isBYOS: boolean;
    total: number;
}

export const NOTCH_SEARCH_START = `${SearchActionTypes.NOTCH_SEARCH}${EApiActionTypes.API_START}`;
export const NOTCH_SEARCH_SUCCESS = `${SearchActionTypes.NOTCH_SEARCH}${EApiActionTypes.API_SUCCESS}`;
export const NOTCH_SEARCH_FAILURE = `${SearchActionTypes.NOTCH_SEARCH}${EApiActionTypes.API_FAIL}`;