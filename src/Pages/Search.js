// Import dependencies
import React, { useState } from "react";
import { BsListUl } from "react-icons/bs";
import { CordraClient } from "@cnri/cordra-client";

// Import custom components

// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";
import { getUserToken, searchDatabase } from "../Hooks/clientUtils";
import { FiSliders } from "react-icons/fi";

function Search() {
  const [searchResults, updateSearchResults] = useState([]);
  const [searchQuery, updateSearchQuery] = useState();

  const search = (event) => {
    const userToken = getUserToken();
    searchDatabase(userToken, event.target.value, updateSearchResults);
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
      <div className="rounded-lg max-h-96 overflow-scroll p-5 bg-white min-h-[384px]">
        <table className="bg-white rounded border-separate ">
          <thead>
            <tr className="">
              <th>ID</th>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Date Created</th>
              <th>Quantity</th>
              <th>Authors</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">{searchResults}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
