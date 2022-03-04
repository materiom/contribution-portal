import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { dummyData } from "../Data";
import useUpdateTitle from "../Hooks/UpdateTitle";

export default function NewRecipe() {
  useUpdateTitle("New Recipe");
  const history = useHistory();
  return (
    <div className="min-h-full flex flex-col p-20">
      <h6 className="text-gray-400">Contribute a recipe</h6>

      <div className="flex my-3">
        <h2 className="text-3xl">New Recipe</h2>
        <div className="h-8 w-8 ml-3 text-white bg-MatBlue rounded flex justify-center items-center">
          <BsPencilSquare />
        </div>
      </div>

      <p className="py-5">To get started, please give your recipe a name.</p>

      <div className="flex flex-col my-5 bg-white rounded w-[400px] p-2">
        <label
          className="text-gray-400 text-xs flex justify-between"
          htmlFor="recipeName"
        >
          <h6>🇹 RECIPE TITLE</h6>
          <h6>Required</h6>
        </label>
        <input
          className="my-3 border-0 focus:rounded"
          label="recipeName"
          type="text"
        />
          <button onClick={() => history.push(`/edit-recipe/${0}`, { from: "/warning"})} className="blue-button">
            Create
            <FiArrowRight />
          </button>
      </div>
    </div>
  );
}
