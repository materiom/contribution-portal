// Import dependencies
import React, { useState } from "react";
import RecipeTableRow from "./RecipeTableRow";
import { dummyData } from "../Data";

function RecipeTable() {
  // Initialize state
  const [active, handleActive] = useState(true);

  // Render recipe table with dummy data and RecipeTableRow component
  const recipeTableRows = dummyData.map((item, index) => {
    return item.status === "draft" ? (
      ""
    ) : (
      <RecipeTableRow key={item.title} data={item} index={index} />
    );
  });

  // Render draft recipe table with dummy data and RecipeTableRow component
  const draftTableRows = dummyData.map((item, index) => {
    return item.status === "draft" ? (
      <RecipeTableRow key={item.title} data={item} index={index} />
    ) : (
      ""
    );
  });
  
  return (
    <div className="w-full max-w-7xl mt-5 overflow-scroll">
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
          <tr>
            <th className="px-6 py-2 max-w-xs text-xs text-gray-500">
              Recipe Name
            </th>
            <th className="px-6 py-2 text-xs text-gray-500">Date Created</th>
            <th className="px-6 py-2 text-xs text-gray-500">Status</th>
            <th className="px-6 py-2 text-xs text-gray-500">Views</th>
            <th className="px-6 py-2 text-xs text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {active ? recipeTableRows : draftTableRows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeTable;
