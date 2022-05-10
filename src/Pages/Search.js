// Import dependencies
<<<<<<< HEAD
import React, { useState, useContext } from "react";
import { FiSliders } from "react-icons/fi";
import { CordraClient } from "@cnri/cordra-client";
=======
import React, { useState } from "react";
>>>>>>> 3008339154789d452e83aa640818aa3cdc8aebdf

// Import custom components
import SearchRecipeTable from "../Components/SearchRecipeTable";

// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";
import { getUserToken, searchDatabase } from "../Hooks/clientUtils";
<<<<<<< HEAD
import userContext from "../Hooks/UserContext";
=======
import { FiSliders } from "react-icons/fi";
import FilterDropdown from "../Components/FilterDropdown";
>>>>>>> 3008339154789d452e83aa640818aa3cdc8aebdf

function Search(props) {
  const [searchResults, updateSearchResults] = useState([]);
<<<<<<< HEAD

  const userStatus = useContext(userContext);

  const search = (event) => {
    const client = new CordraClient("https://localhost:8443");

    const userToken = getUserToken();
    console.log(
      (async () => {
        return await client
          .getAuthenticationStatus()
          .then((response) => console.log(response))
          .catch(error => console.error(error))
      })()
    );
    client.authenticate(userToken).catch(async (error) => {
      console.error(error);
    });
    searchDatabase(userToken, event.target.value, updateSearchResults);
=======
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
>>>>>>> 3008339154789d452e83aa640818aa3cdc8aebdf
  };

  // Custom hook to update page title on initial load
  useUpdateTitle("Search");
  return (
    <div className="min-h-full w-full flex flex-col p-20">
      <div className="flex flex-col w-full">
        <h2 className=" text-2xl">Find a Recipe to use as a template</h2>
      </div>
      <div className="py-5 flex  rounded justify-between">
<<<<<<< HEAD
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
      <div className="rounded-lg max-h-[80%] h-[80%] overflow-scroll p-5 bg-white min-h-[384px]">
        <table className="bg-white rounded border-separate w-full">
          <thead>
            <tr className="">
              <th>ID</th>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Date Created</th>
              <th>Quantity</th>
              <th>Authors</th>
              <th>Time</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">{searchResults}</tbody>
        </table>
=======
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
>>>>>>> 3008339154789d452e83aa640818aa3cdc8aebdf
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
