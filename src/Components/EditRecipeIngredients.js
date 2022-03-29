// Import dependencies
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Import custom components
import EditRecipeDetailsInput from "./EditRecipeDetailsInput";

function EditRecipeIngredients(props) {
  // Initialize state

  const updateRecipeContent = (event) => {
    props.updateRecipe((prevState) => ({
      ...prevState,
      content: {
        ...prevState.content,
        [event.target.name]: event.target.value,
      },
    }));
  };

  // Function to save data
  const saveRecipeDetails = async () => {};

  return (
    <div
      className={
        `overflow-hidden absolute
       z-50 h-modal md:h-full top-0 right-0 bottom-0 left-0 bg-gray-700 bg-opacity-70  ` +
        (props.show && "-z-10")
      }
    >
      <div
        className={
          "overflow-scroll px-4 w-full max-w-4xl h-full absolute right-0 transition-all duration-500  " +
          (props.show && "right-[-80%] bg-opacity-0 -z-10")
        }
      >
        <div className=" h-full bg-white rounded-lg shadow dark:bg-gray-300">
          <div className=" flex justify-start items-center p-5 rounded-t border-b dark:border-gray-600">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => props.showIngredients()}
            >
              <svg
                onClick={() => props.showIngredients()}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <h3 className="text-xl font-semibold lg:text-2xl text-black0">
              {props.recipeToEdit.content !== undefined &&
                props.recipeToEdit.content.recipeName}
            </h3>
            <button
              onClick={() => saveRecipeDetails()}
              className="blue-button ml-auto"
            >
              Save
              <FiArrowUpRight />
            </button>
          </div>
          <div className="flex flex-col items-center">
            {/* Edit difficulty */}
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              value={props.recipeToEdit.difficulty}
              updateRecipe={updateRecipeContent}
              title="ingredient"
              type="input"
              required={true}
              number={false}
            />
            {/* Edit quantity */}
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              updateRecipe={updateRecipeContent}
              value={props.recipeToEdit.quantity}
              title="quantity"
              type="input"
              required={true}
              number={false}
              max={""}
            />
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              value={props.recipeToEdit.difficulty}
              updateRecipe={updateRecipeContent}
              title="ingredient #2"
              type="input"
              required={true}
              number={false}
            />
            {/* Edit quantity */}
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              updateRecipe={updateRecipeContent}
              value={props.recipeToEdit.quantity}
              title="quantity #2"
              type="input"
              required={true}
              number={false}
              max={""}
            />
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              value={props.recipeToEdit.difficulty}
              updateRecipe={updateRecipeContent}
              title="ingredient #3"
              type="input"
              required={true}
              number={false}
            />
            {/* Edit quantity */}
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              updateRecipe={updateRecipeContent}
              value={props.recipeToEdit.quantity}
              title="quantity #3"
              type="input"
              required={true}
              number={false}
              max={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRecipeIngredients;
