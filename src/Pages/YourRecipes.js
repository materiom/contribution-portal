// Import dependencies
import React from "react";
import { BsListUl } from "react-icons/bs";

// Import custom components
import RecipeTable from "../Components/RecipeTable";

// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";

function YourRecipes() {
  // Custom hook to update page title on initial load
  useUpdateTitle("Your Recipes");
  return (
    <div className="min-h-full w-full flex flex-col p-20">
      <div className="flex flex-col w-full">
        <h6 className="text-gray-400 text-sm">Materiom Contribution Portal</h6>

        <div className="flex my-3">
          <h2 className="text-3xl">Your Recipes</h2>
          <div className="h-8 w-8 ml-3 text-white bg-MatBlue rounded flex justify-center items-center">
            <BsListUl />
          </div>
        </div>
      </div>
      <RecipeTable />
    </div>
  );
}

export default YourRecipes;
