// Import dependencies
import React, { useState } from "react";

// Import custom components
import SearchRecipeTable from "../Components/SearchRecipeTable";

// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";
import { getUserToken, searchDatabase } from "../Hooks/clientUtils";
import { FiSliders } from "react-icons/fi";
import FilterDropdown from "../Components/FilterDropdown";

function Search() {
  const [searchResults, updateSearchResults] = useState([]);
  const [showFilterMenu, handleShowFilterMenu] = useState(false);
  const [searchFilter, updateSearchFilter] = useState([]);

  const search = (event) => {
    if (event.target.value.length < 1) {
      updateSearchResults([]);
    } else {
      const userToken = getUserToken();
      searchDatabase(
        userToken,
        event.target.value,
        searchFilter,
        updateSearchResults
      );
    }
  };

  // Custom hook to update page title on initial load
  useUpdateTitle("Search");
  return (
    <div className="min-h-full w-full flex flex-col p-20">
      <div className="flex flex-col w-full">
        <h2 className=" text-2xl">Find a Recipe to use as a template</h2>
      </div>
      <div className="py-5 flex  rounded justify-between">
        <div className="w-[80%] relative">
          <input
            className="w-[100%] rounded bg-white"
            type="text"
            onChange={(event) => {
              search(event);
            }}
          />
          <button className="blue-button absolute right-10 my-2 top-0 bottom-0 ">
            Search
          </button>
        </div>
        <div className="w-[15%] relative">
          <button
            onClick={() => handleShowFilterMenu(!showFilterMenu)}
            className={
              "w-full h-full flex justify-center items-center bg-white rounded-xl" +
              (showFilterMenu ? ". rounded-t-xl" : "")
            }
          >
            <FiSliders className="mr-2" />
            Filter
          </button>
          <FilterDropdown
            updateSearchFilter={updateSearchFilter}
            show={showFilterMenu}
          />
        </div>
      </div>
      {searchResults.length !== 0 ? (
        <SearchRecipeTable recipes={searchResults} />
      ) : (
        <h1>Enter a search...</h1>
      )}
    </div>
  );
}

export default Search;
