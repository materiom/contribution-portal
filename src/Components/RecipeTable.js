// Import dependencies
import React, { useEffect, useState } from "react";
import { CordraClient } from "@cnri/cordra-client";

// Import custom hooks
import { getUserToken } from "../Hooks/clientUtils";

// Import custom components
import SearchResultsTableRow from "./SearchResultsTableRow";

function RecipeTable() {
  // Initialize state
  const [active, handleActive] = useState(true);
  const [recipes, updateRecipes] = useState([]);

  useEffect(() => {
    const userToken = getUserToken();

    const client = new CordraClient(
      process.env.REACT_APP_CORDRA_URL,
      userToken
    );

    const params = {
      sortFields: [{ name: "/id", reverse: false }],
    };

    client
      .search("type:Document", params)
      .then((response) =>
        response.results.map((item, index) => {
          return (
            <SearchResultsTableRow key={item.id} data={item} index={index} />
          );
        })
      )
      .then((results) => updateRecipes(results));
  }, []);

  return (
    <div className="w-full mt-5 overflow-scroll">
      <div className="flex flex-col h-12 sticky  top-0 bg-neutral-300">
        <div className="flex">
          <div onClick={() => handleActive(true)} className="p-2">
            <button>Recipes</button>
          </div>
          <div onClick={() => handleActive(false)} className="p-2">
            <button>Drafts</button>
          </div>
        </div>
        <hr className={"blue-tab " + (!active && " ml-[4.5rem]")}></hr>
      </div>
      <table className="w-full text-center">
        <thead className="bg-gray-200 border-2 border-gray-400  sticky top-12">
          <tr className="">
            <th className="px-6 py-2 text-xs text-gray-500">ID</th>
            <th className="px-6 py-2 text-xs text-gray-500">Title</th>
            <th className="px-6 py-2 text-xs text-gray-500">Difficulty</th>
            <th className="px-6 py-2 text-xs text-gray-500">Date Created</th>
            <th className="px-6 py-2 text-xs text-gray-500">Quantity</th>
            <th className="px-6 py-2 text-xs text-gray-500">Authors</th>
            <th className="px-6 py-2 text-xs text-gray-500">Time</th>
            <th className="px-6 py-2 text-xs text-gray-500">Description</th>
            <th className="px-6 py-2 text-xs text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">{active ? recipes : ""}</tbody>
      </table>
    </div>
  );
}

export default RecipeTable;
