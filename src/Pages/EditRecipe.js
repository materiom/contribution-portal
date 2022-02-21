import React from "react";
import EditRecipeSideBar from "../Components/EditRecipeSideBar";

export default function EditRecipe() {
    const recipe = {}
    recipe.recipeTitle = "methylcellulose bioplastic"
    return (
        <div>
            <EditRecipeSideBar recipeTitle={recipe.recipeTitle}/>
        </div>
    );
}

