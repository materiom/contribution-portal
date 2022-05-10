// Import dependencies
import { CordraClient } from "@cnri/cordra-client";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import ArrowButton from "../Components/ArrowButton";
import useUpdateTitle from "../Hooks/UpdateTitle";

export default function NewRecipe() {
  // Initialize state
  const [recipeName, handleRecipeName] = useState("");

  // Custom hook to update page title on initial load
  useUpdateTitle("New Recipe");

  const user = JSON.parse(sessionStorage.getItem("user"));

  const createNewRecipe = () => {
    if (recipeName.length > 3) {
      const client = new CordraClient("https://localhost:8443", {
        username: user.username,
        token: user.access_token,
      });
      const cordraObject = {
        type: "Document",
        content: { recipeName: recipeName },
      };
      let newRecipeID;
      client
        .create(cordraObject)
        .then((response) => {
          newRecipeID = response.id;
          history.push(`/edit-recipe/${newRecipeID}`, { from: "/warning" });
        })
        .catch((error) => console.log(error));
    }
  };

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
          name="recipeName"
          value={recipeName}
          onChange={(event) => handleRecipeName(event.target.value)}
          type="text"
        />
        <ArrowButton
          displayText="Create"
          function={() => createNewRecipe()}
          color="blue"
        />
      </div>
    </div>
  );
}
