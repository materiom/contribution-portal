// Import dependencies
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";
import {
  getDatabaseItemById,
  getUserToken,
  updateDatabaseItemById,
} from "../Hooks/clientUtils";
import recipeContext from "../Hooks/RecipeContext";

// Custom components
import EditRecipeListItem from "../Components/EditRecipeListItem";
import EditRecipeSideBar from "../Components/EditRecipeSideBar";
import EditRecipeDetails from "../Components/EditRecipeDetails";
import { useHistory } from "react-router-dom";
import ArrowButton from "../Components/ArrowButton";

export default function EditRecipe() {
  const useRecipeContext = useContext(recipeContext);
  console.log(useRecipeContext)
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
        console.log(recipe)
      useRecipeContext.handleUpdate(recipe);
    });
  };
  // Initialize state
  const [showEditRecipeDetails, handleShowEditRecipeDetails] = useState(true);
  const [recipeToEdit, updateRecipe] = useState(recipeContext.recipe);
  const [termsAndConditions, updateTerms] = useState(false);
  const [complete, updateComplete] = useState(false);
  const history = useHistory();
  // Function to toggle the recipe details
  const showDetails = () => {
    handleShowEditRecipeDetails(!showEditRecipeDetails);
  };

  // useEffect hook called once on render to get the recipe
  useEffect((getRecipe) => {
    getRecipe();
  }, []);

  useEffect(() => {
    if (termsAndConditions) {
      updateComplete(true);
    } else {
      updateComplete(false);
    }
  }, [termsAndConditions]);

  const updateRecipeContent = (event) => {
    event.preventDefault();
    console.log(event);
    updateRecipe((prevState) => ({
      ...prevState,
      content: {
        ...prevState.content,
        [event.target.name]: event.target.value,
      },
    }));
  };

  // Function to save data
  const saveRecipeDetails = async () => {
    const userToken = getUserToken();
    const id = recipeToEdit.id;
    const content = {
      recipeName: recipeToEdit.content.recipeName,
      difficulty: recipeToEdit.content.difficulty,
      quantity: recipeToEdit.content.quantity,
      authors: recipeToEdit.content.authors,
      description: recipeToEdit.content.description,
      time: recipeToEdit.content.time,
    };
    await updateDatabaseItemById(userToken, id, content)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex ">
      <EditRecipeSideBar
        showDetails={showDetails}
        recipeToEdit={recipeToEdit}
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
              Created: {recipeToEdit && recipeToEdit.content.dateCreated}
            </p>
            <p className="text-xs text-gray-400">
              {recipeToEdit && recipeToEdit.id}{" "}
            </p>
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
            updateRecipeContent={updateRecipeContent}
            saveRecipeDetails={saveRecipeDetails}
            showDetails={showDetails}
            updateRecipe={updateRecipe}
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

      <ArrowButton
        displayText={`Confirm ${"&"} Submit`}
        isDisabled={!termsAndConditions}
        function={() => history.push("/confirmation", { from: "/" })}
        color="blue"
      />
        </div>
      </div>
    </div>
  );
}
