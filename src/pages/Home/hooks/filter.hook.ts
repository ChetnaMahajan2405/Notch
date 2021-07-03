import { useCallback, useEffect, useState } from "react";
import { isNonEmptyArray } from "utils/helpers.util";
import useSearch from "./search.hook";

interface Props {
    vendors: string[];
    status: string[];
}
const useFilters = () => {
    const {
        search: { results },
    } = useSearch();
    // holds filtered data to be shown to the user
    const [filteredSearchData, updateFilteredSearchData] = useState(() => results);

    // holds the currently  applied filters by the user
    const [selectedFilters, updateSelectedFilters] = useState(() => ({
        vendor: "",
        status: "",
    }));

    // holds the list of vendors and status for filtered dropdown 
    const [options, updateOptions] = useState(
        (): Props => ({
            vendors: [],
            status: [],
        })
    );

    /**
     * Create Option List for vendors and status
     */
    const setInitialOptionList = useCallback(() => {
        const obj: { vendors: string[]; status: string[] } = {
            vendors: [],
            status: [],
        };
        results.forEach(({ vendorName, orderBuyerStatus }) => {
            if (!obj.vendors.includes(vendorName)) {
                obj.vendors.push(vendorName);
            }
            if (!obj.status.includes(orderBuyerStatus)) {
                obj.status.push(orderBuyerStatus);
            }

        });

        updateOptions(obj);
    }, [results]);

    /**
     * Select Vendor Filter
     */
    const onSelectVendor = (vendor: string) => {
        const status: string[] = [];
        const data = results.filter(({ orderBuyerStatus, vendorName }) => {
            if (
                selectedFilters.status &&
                vendorName === vendor &&
                selectedFilters.status === orderBuyerStatus
            ) {
                // Status filter has been pre-selected
                status.push(orderBuyerStatus);
                return true;
            } else if (!selectedFilters.status && vendorName === vendor) {
                // No filter has been selected
                status.push(orderBuyerStatus);
                return true;
            }
            return false;
        });
        updateFilteredSearchData(data);
        updateOptions((state) => ({
            ...state,
            status,
        }));
        updateSelectedFilters((state) => ({ ...state, vendor }));
    };

    /**
     * Select Status Filter
     */
    const onSelectStatus = (status: string) => {
        const vendors: string[] = [];
        const data = results.filter(({ orderBuyerStatus, vendorName }) => {
            if (
                selectedFilters.vendor &&
                selectedFilters.vendor === vendorName &&
                orderBuyerStatus === status
            ) {
                // Vendor filter has been pre-selected
                vendors.push(vendorName);
                return true;
            } else if (!selectedFilters.vendor && orderBuyerStatus === status) {
                // No filter has been selected
                vendors.push(vendorName);
                return true;
            }
            return false;
        });
        updateFilteredSearchData(data);
        updateOptions((state) => ({
            ...state,
            vendors,
        }));
        updateSelectedFilters((state) => ({ ...state, status }));
    };

     /**
     * Reset Vendor Filter
     */
    const onResetVendor = () => {
        if (!selectedFilters.status) {
            /**
             * Since only vendor filter has been applied,
             * remove all filters
             */
            updateFilteredSearchData(results);
            setInitialOptionList();
        } else {
            /**
             * Remove vendor filter and apply status filter
             */
            const status: string[] = [];
            const vendors: string[] = [];
            const data = results.filter(({ orderBuyerStatus, vendorName }) => {
                if (selectedFilters.status === orderBuyerStatus) {
                    if (!status.includes(orderBuyerStatus)) {
                        status.push(orderBuyerStatus);
                    }
                    if (!vendors.includes(vendorName)) {
                        vendors.push(vendorName);
                    }
                    return true;
                }

                return false;
            });
            updateOptions({
                vendors,
                status,
            });
            updateFilteredSearchData(data);
        }
        updateSelectedFilters((state) => ({
            ...state,
            vendor: "",
        }));
    };

    /**
     * Reset Status Filter
     */
    const onResetStatus = () => {
        if (!selectedFilters.vendor) {
            /**
             * Since only status filter has been applied,
             * remove all filters
             */
            updateFilteredSearchData(results);
            setInitialOptionList();
        } else {
            /**
             * Remove status filter and apply vendor filter
             */
            const status: string[] = [];
            const vendors: string[] = [];
            const data = results.filter(({ orderBuyerStatus, vendorName }) => {
                if (selectedFilters.vendor === vendorName) {
                    if (!vendors.includes(vendorName)) {
                        vendors.push(vendorName);
                    }
                    if (!status.includes(orderBuyerStatus)) {
                        status.push(orderBuyerStatus);
                    }
                    return true;
                }
                return false;
            });
            updateOptions({
                vendors,
                status,
            });
            updateFilteredSearchData(data);
        }
        updateSelectedFilters((state) => ({
            ...state,
            status: "",
        }));
    };

    useEffect(() => {
        /**
         * Update fileterd data and create option list
         */
        if (isNonEmptyArray(results)) {
            updateFilteredSearchData(results);
            setInitialOptionList();
        }
    }, [results, setInitialOptionList]);

    return {
        filteredSearchData,
        options,
        onSelectVendor,
        onSelectStatus,
        onResetVendor,
        onResetStatus
    }
};

export default useFilters;