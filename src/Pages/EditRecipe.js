import React, { useState } from "react";
import EditRecipeListItem from "../Components/EditRecipeListItem";
import EditRecipeSideBar from "../Components/EditRecipeSideBar";
import { Link, useParams } from "react-router-dom";

import { FiArrowUpRight } from "react-icons/fi";
import { dummyData } from "../Data";
import useUpdateTitle from "../Hooks/UpdateTitle";
import EditRecipeDetails from "../Components/EditRecipeDetails";

export default function EditRecipe() {
  const [showEditRecipeDetails, handleShowEditRecipeDetails] = useState(true);
  const showDetails = () => {
      handleShowEditRecipeDetails(!showEditRecipeDetails);
      console.log(showEditRecipeDetails)
    }
  useUpdateTitle("Edit Recipe");
  const params = useParams();
  const recipe = dummyData[params.id];
  return (
    <div className="flex ">
      <EditRecipeSideBar
        showDetails={showDetails}
        show={showEditRecipeDetails}
        recipe={recipe}
      />
      <div className="flex flex-col w-[50%] min-w[500px] m-auto">
        <div className="flex flex-col mb-5">
          <h2 className="text-3xl text-center my-2 capitalize">
            {recipe.title}
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
            toggle={() => handleShowEditRecipeDetails(true)}
            progress="complete"
            description={"Lorem ipsum tempor incididunt ut labore et aliqua."}
          />

          <EditRecipeDetails
        showDetails={showDetails} recipe={recipe} show={showEditRecipeDetails} />

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
