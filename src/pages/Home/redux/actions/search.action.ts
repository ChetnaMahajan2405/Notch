import { IAction, TDispatch } from "config/redux/types/redux.types";
import { EApiMiddlewareMethods } from "config/redux/middeware/api.middleware.types";
import { SearchActionTypes, NOTCH_SEARCH_SUCCESS, ISearchData, ISearchParams, NOTCH_SEARCH_FAILURE } from "../types";
import { isNonEmptyArray } from "utils/helpers.util";
import { SEARCH_URL } from "constant/api.url";

export const setSearchData = (payload: ISearchData[]): IAction => ({
    type: NOTCH_SEARCH_SUCCESS,
    payload,
});

const transform = (data: ISearchData[]) => {
  return data.map(({
      id,
      orderBuyerStatus,
      deliveryDay,
      vendorName,
      isPendingVendorOnboarding,
      isBYOS,
      total,
  }) => ({
    id,
    orderBuyerStatus: orderBuyerStatus.trim().replace('\t',''),
    deliveryDay,
    vendorName: vendorName.trim().replace('\t',''),
    isPendingVendorOnboarding,
    isBYOS,
    total,
  }))
}

export const searchData = ({ data }: ISearchParams) => (dispatch: TDispatch<any>) => {
    dispatch({
        type: SearchActionTypes.NOTCH_SEARCH,
        payload: {
            method: EApiMiddlewareMethods.POST,
            onSuccess: (payload: { data: ISearchData[] }) => {
                if (isNonEmptyArray(payload.data)) {
                    dispatch(setSearchData(transform(payload.data)));

                }
            },
            onFailure: () => dispatch({ type: NOTCH_SEARCH_FAILURE }),
            url: SEARCH_URL,
            data,
        },
    });
};