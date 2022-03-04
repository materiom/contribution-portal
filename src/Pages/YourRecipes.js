import React, { useEffect } from "react";
import { BsListUl } from "react-icons/bs";
import RecipeTable from "../Components/RecipeTable";
import useUpdateTitle from "../Hooks/UpdateTitle";

function YourRecipes() {
  useUpdateTitle("Your Recipes");
  return (
    <div className="min-h-full flex flex-col p-20">
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
