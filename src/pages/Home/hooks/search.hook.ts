import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../redux/actions/search.action";
import { ISearchState } from "../redux/reducer/search.reducer";
import { ISearchParams } from "../redux/types";

const useSearch = (): {
    search: ISearchState
} => {
    const { search } = useSelector((state: { search: ISearchState }) => state);
    const dispatch = useDispatch();

    const searchNotch = useCallback((data: ISearchParams) => {
        dispatch(searchData(data));
    }, [dispatch]);

    useEffect(() => searchNotch({ data: {} }), [searchNotch]);

    return {
        search,
    };
};

export default useSearch;