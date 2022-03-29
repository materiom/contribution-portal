// Import dependencies
import React, { useState } from "react";

// Import custom components
import SearchRecipeTable from "../Components/SearchRecipeTable";

// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";
import { getUserToken, searchDatabase } from "../Hooks/clientUtils";
import { FiSliders } from "react-icons/fi";

function Search() {
  const [searchResults, updateSearchResults] = useState([]);

  const search = (event) => {
    if (event.target.value.length < 1) {
      updateSearchResults([]);
    } else {
      const userToken = getUserToken();
      searchDatabase(userToken, event.target.value, updateSearchResults);
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
        <input
          className="w-[80%] rounded bg-white"
          type="text"
          onChange={(event) => {
            search(event);
          }}
        />
        <button className="w-[15%] flex justify-center items-center bg-white rounded">
          <FiSliders className="mr-2" />
          Filter
        </button>
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
