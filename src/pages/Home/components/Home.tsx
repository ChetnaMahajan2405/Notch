import { PageLoader } from "pages/common";
import DropDown from "pages/common/DropDown";
import Grid from "pages/common/Grid";
import useFilters from "../hooks/filter.hook";
import useSearch from "../hooks/search.hook";
import "./home.scss";

const Home = () => {
  const {
    search: { loading },
  } = useSearch();
  const {
    options,
    filteredSearchData,
    onSelectVendor,
    onResetVendor,
    onSelectStatus,
    onResetStatus,
  } = useFilters();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="row">
        <DropDown
          options={options.vendors}
          intialState="All Suppliers"
          resetLabel="Reset Suppliers"
          header="Select Supplier"
          onSelect={onSelectVendor}
          onReset={onResetVendor}
        />
        <DropDown
          options={options.status}
          intialState="All Status"
          resetLabel="Reset Status"
          header="Select Status"
          onSelect={onSelectStatus}
          onReset={onResetStatus}
        />
      </div>
      <Grid data={filteredSearchData} />
    </>
  );
};

export default Home;
