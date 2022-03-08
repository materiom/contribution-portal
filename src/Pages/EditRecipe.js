// Import dependencies
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { dummyData } from "../Data";
// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";
import { getDatabaseItemById, getUserToken } from "../Hooks/clientUtils";
// Custom components
import EditRecipeListItem from "../Components/EditRecipeListItem";
import EditRecipeSideBar from "../Components/EditRecipeSideBar";
import EditRecipeDetails from "../Components/EditRecipeDetails";

export default function EditRecipe() {
  // Initialize state
  const [showEditRecipeDetails, handleShowEditRecipeDetails] = useState(false);
  const [recipeToEdit, updateRecipe] = useState({});

  // Function to toggle the recipe details on line 27
  const showDetails = () => {
    handleShowEditRecipeDetails(!showEditRecipeDetails);
  };

  // Custom hook to update page title on initial load
  useUpdateTitle("Edit Recipe");

  // Get URL parameters
  const params = useParams();
  // Create recipe id from params
  const recipeId = params.test + "/" + params.id;
  // Get user token for DB
  const userToken = getUserToken();
  // Get recipe from DB and update state
  const getRecipe = async () => {
    const recipe = await getDatabaseItemById(userToken, recipeId);
    updateRecipe(recipe);
  };
  // useEffect hook called once on render to get the recipe
  useEffect(() => {
    getRecipe();
  }, []);

  // Dummy data
  const recipe = dummyData[0];
  return (
    <div className="flex ">
      <EditRecipeSideBar showDetails={showDetails} recipe={recipe} />
      <div className="flex flex-col w-[50%] min-w[500px] m-auto">
        <div className="flex flex-col mb-5">
          <h2 className="text-3xl text-center my-2 capitalize">
            {recipeToEdit.content?.recipeName}
          </h2>
          <div className="flex justify-around">
            <Link to="/">
              <p className="text-xs text-cyan-600 flex items-center">
                View recipe in library
                <FiArrowUpRight className="ml-2" />
              </p>
            </Link>
            <p className="text-xs text-gray-400">
              Created: {recipe.dateCreated}
            </p>
            <p className="text-xs text-gray-400">REF: MTRM0001 </p>
          </div>
        </div>
        <ul className="p-0 my-5">
          <EditRecipeListItem
            title={"Recipe details"}
            showDetails={showDetails}
            progress="complete"
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />

          <EditRecipeDetails
            showDetails={showDetails}
            recipe={recipe}
            show={showEditRecipeDetails}
          />

          <EditRecipeListItem
            title={"Recipe details"}
            linkTo={"/warning"}
            progress="partial"
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />
          <EditRecipeListItem
            title={"Recipe details"}
            linkTo={"/warning"}
            progress="none"
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />
          <EditRecipeListItem
            title={"Recipe details"}
            linkTo={"/warning"}
            progress="partial"
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />
        </ul>
        <div className="flex flex-col items-center">
          <div className="flex justify-start items-center m-auto text-xs text-gray-500">
            <input
              type="checkbox"
              id="warningCheckbox1"
              className="custom-checkbox"
            />
            <label htmlFor="warningCheckbox1">
              Lorem ipsum tempor incididunt ut labore et aliqua. Lorem ipsum
              dolor sit amet, incididunt ut labore et dolore magna aliqua.
            </label>
          </div>

          <button disabled className="blue-button my-5 ">
            Confirm {"&"} Submit
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}
