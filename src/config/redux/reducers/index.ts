import apiReducer, { IApiState, initialApiState } from "./api.reducer";
import searchReducer, { ISearchState, initialSearchState } from "pages/Home/redux/reducer/search.reducer";
import { combineReducers } from "redux";

export interface IAppState {
  api: IApiState;
  search: ISearchState;
}

export const initialAppState = {
  api: initialApiState,
  search: initialSearchState,
};

const rootReducer = combineReducers({
  api: apiReducer,
  search: searchReducer,
});

export default rootReducer;