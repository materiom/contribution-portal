// Import dependencies
import React from "react";

function SearchRecipeTable(props) {
  return (
    <table className="w-[80%] text-center">
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
      <tbody className="bg-white">{props.recipes}</tbody>
    </table>
  );
}

export default SearchRecipeTable;
