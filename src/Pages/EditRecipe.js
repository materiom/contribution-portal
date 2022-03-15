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
import { useHistory } from "react-router-dom";

export default function EditRecipe() {
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
    await getDatabaseItemById(userToken, recipeId).then((recipe) => {
      updateRecipe(recipe);
    });
  };
  // Initialize state
  const [showEditRecipeDetails, handleShowEditRecipeDetails] = useState(true);
  const [recipeToEdit, updateRecipe] = useState(false);
  const [termsAndConditions, updateTerms] = useState(false);
  const [complete, updateComplete] = useState(false);
  const history = useHistory();
  // Function to toggle the recipe details
  const showDetails = () => {
    handleShowEditRecipeDetails(!showEditRecipeDetails);
  };

  // useEffect hook called once on render to get the recipe
  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    if (termsAndConditions) {
      updateComplete(true);
    } else {
      updateComplete(false);
    }
  }, [termsAndConditions]);
  // Dummy data
  const recipe = dummyData[0];
  return (
    <div className="flex ">
      <EditRecipeSideBar
        showDetails={showDetails}
        recipeToEdit={recipeToEdit}
        recipe={recipe}
      />
      <div className="flex flex-col w-[50%] min-w[500px] m-auto">
        <div className="flex flex-col mb-5">
          <h2 className="text-3xl text-center my-2 capitalize">
            {recipeToEdit && recipeToEdit.content.recipeName}
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
            progress={complete}
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />

          <EditRecipeDetails
            refreshRecipe={getRecipe}
            recipeToEdit={recipeToEdit}
            updateRecipe={updateRecipe}
            showDetails={showDetails}
            show={showEditRecipeDetails}
          />

          <EditRecipeListItem
            title={"Recipe Ingredients"}
            linkTo={"/warning"}
            progress={""}
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />
          <EditRecipeListItem
            title={"Recipe Method"}
            linkTo={"/warning"}
            progress={""}
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />
          <EditRecipeListItem
            title={"Recipe Images"}
            linkTo={"/warning"}
            progress={""}
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />
        </ul>
        <div className="flex flex-col items-center">
          <div className="flex justify-start items-center m-auto text-xs text-gray-500">
            <input
              checked={termsAndConditions}
              onChange={() => updateTerms(!termsAndConditions)}
              type="checkbox"
              id="warningCheckbox1"
              className="custom-checkbox"
            />
            <label htmlFor="warningCheckbox1">
              Lorem ipsum tempor incididunt ut labore et aliqua. Lorem ipsum
              dolor sit amet, incididunt ut labore et dolore magna aliqua.
            </label>
          </div>

          <button
            onClick={() => history.push("/confirmation", { from: "/" })}
            disabled={!termsAndConditions}
            className="blue-button my-5 "
          >
            Confirm {"&"} Submit
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}
