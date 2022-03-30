// Import dependencies
import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Import custom components
import EditRecipeIngredientsInput from "./EditRecipeIngredientsInput";
import AddBlock from "./AddBlock";
import XButton from "./XButton";

function EditRecipeIngredients(props) {
  // Initialize state

  const [ingredientsArray, updateIngredientsArray] = useState([]);

  const updateRecipeContent = (event) => {
    props.updateRecipe((prevState) => ({
      ...prevState,
      content: {
        ...prevState.content,
        [event.target.name]: event.target.value,
      },
    }));
  };

  // Function to add new ingredient block
  const addIngredientBlock = () => {
    const index = ingredientsArray.length + 1;
    updateIngredientsArray([
      ...ingredientsArray,
      <EditRecipeIngredientsInput key={index} title={`ingredient-#${index}`} />,
    ]);
  };

  // Function to save data
  const saveRecipeDetails = async () => {};

  useEffect(() => {
    updateIngredientsArray(
      ingredientsArray.map((ingredient, index) => {
        return (
          <EditRecipeIngredientsInput
            key={index}
            title={`ingredient-#${index + 1}`}
            ingredientDetails={ingredient}
          />
        );
      })
    );
  }, []);

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
        <div className=" h-full bg-white rounded-lg shadow dark:bg-gray-300 overflow-y-scroll">
          <div className=" flex justify-start items-center p-5 rounded-t border-b dark:border-gray-600">
            <XButton buttonFunction={props.showIngredients} />
            <button
              onClick={() => saveRecipeDetails()}
              className="blue-button ml-auto"
            >
              Save
              <FiArrowUpRight />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap p-2 justify-around">{ingredientsArray}</div>

            <AddBlock
              upright={ingredientsArray.length > 3}
              additionalClasses={
                "absolute bottom-10 left-auto border-2 border-MatBlue " +
                (ingredientsArray.length > 3 &&
                  "duration-500 [writing-mode:vertical-lr] w-min left-[80%]")
              }
              add={addIngredientBlock}
              title="ADD INGREDIENT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRecipeIngredients;
