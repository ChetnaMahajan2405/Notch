import { IAction } from "config/redux/types/redux.types";
import {
    NOTCH_SEARCH_START,
    NOTCH_SEARCH_SUCCESS,
    NOTCH_SEARCH_FAILURE,
    ISearchData
} from "../types";

export const initialSearchState = {
    loading: false,
    results: [],
};

export interface ISearchState {
    loading: boolean;
    results: ISearchData[] | [];
}

const searchReducer = (
    state: ISearchState = initialSearchState,
    action: IAction
): ISearchState => {
    switch (action.type) {
        case NOTCH_SEARCH_START:
            return {
                results: [],
                loading: true,
            };

        case NOTCH_SEARCH_SUCCESS:
            return {
                loading: false,
                results: action.payload,
            };

        case NOTCH_SEARCH_FAILURE:
            return { ...initialSearchState };

    }

    return state;
}

export default searchReducer;