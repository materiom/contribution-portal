// Import dependencies
import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { RiListUnordered } from "react-icons/ri";
import AddBlock from "./AddBlock";
import ArrowButton from "./ArrowButton";
import AuthorTag from "./AuthorTag";
import EditRecipeDetailsInput from "./EditRecipeDetailsInput";

function EditRecipeDetails(props) {
  // Initialize state
  const recipe =
    props.recipeToEdit?.content === undefined ? {} : props.recipeToEdit.content;

  const [additionalSections, updateAdditionalSections] = useState({
    description: false,
    time: false,
  });

  const [authorTagsArray, updateAuthorTagsArray] = useState(
    props.recipeToEdit ? props.recipeToEdit.content.authors : []
  );

  const [newAuthor, updateNewAuthor] = useState("");

//   const updateAuthor = () => {
//     props.updateRecipeContent([...authorTagsArray]);
//   };

  const removeAuthor = (index) => {
    authorTagsArray.splice(index, 1);
    props.updateRecipeContent([...authorTagsArray]);
  };

  let renderedTagsArray = props.recipeToEdit?.content?.authors?.map(
    (item, index) => {
      return (
        <AuthorTag
          name={item}
          key={index}
          removeAuthor={() => removeAuthor(index)}
        />
      );
    }
  );

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
          " px-4 w-full max-w-4xl h-full absolute right-0 transition-all duration-500  " +
          (props.show && "right-[-80%] bg-opacity-0 -z-10")
        }
      >
        <div className=" h-full bg-white rounded-lg shadow dark:bg-gray-300">
          <div className=" flex justify-start items-center p-5 rounded-t border-b dark:border-gray-600">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => props.showDetails()}
            >
              <svg
                onClick={() => props.showDetails()}
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
              {recipe !== undefined && recipe.recipeName}
            </h3>
            <ArrowButton
              displayText="Save"
              function={() => props.saveRecipeDetails()}
              color="blue"
            />
          </div>
          <div className="flex flex-col items-center">
            {/* Edit difficulty */}
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              updateRecipe={props.updateRecipeContent}
              title="difficulty"
              type="input"
              value={props.recipeToEdit?.difficulty}
              required={true}
              number={true}
              max={5}
            />
            {/* Edit quantity */}
            <EditRecipeDetailsInput
              recipeToEdit={props.recipeToEdit}
              updateRecipe={props.updateRecipeContent}
              title="quantity"
              type="input"
              value={props?.recipeToEdit?.quantity}
              required={true}
              number={false}
              max={""}
            />
            {/* Edit author tags */}
            <div className="space-y-6 flex flex-col  my-5 bg-white rounded w-[400px] p-2">
              <label
                className="text-gray-400 text-xs flex justify-between"
                htmlFor="recipeName"
              >
                <h6 className="flex items-center ">
                  <RiListUnordered className="mr-3" /> AUTHORS
                </h6>
                <h6>Required</h6>
              </label>
              {/* Array of AuthorTag components */}
              <div className="flex flex-wrap">{renderedTagsArray}</div>
              <input
                value={newAuthor}
                name="authors"
                onChange={(event) => updateNewAuthor(event.target.value)}
                className="my-3 border-1 rounded"
                label="recipeName"
                type="text"
              />
              <BsFillPlusSquareFill
                onClick={() => {
                  props.updateRecipe((prevState) => ({
                    ...prevState,
                    content: {
                      ...prevState.content,
                      authors: [...prevState.content?.authors, newAuthor],
                    },
                  }));
                  updateNewAuthor("");
                }}
              />
            </div>
            {/* Edit description */}
            {additionalSections.description && (
              <EditRecipeDetailsInput
                recipeToEdit={props.recipeToEdit}
                updateRecipe={props.updateRecipeContent}
                title="description"
                type="textarea"
                value={props.recipeToEdit.description}
                required={false}
                number={false}
                max={""}
                className="animate-[fade_5s_ease-in-out]"
              />
            )}
            {/* Edit time */}
            {additionalSections.time && (
              <EditRecipeDetailsInput
                recipeToEdit={props.recipeToEdit}
                updateRecipe={props.updateRecipeContent}
                title="time"
                type="input"
                value={props.recipeToEdit.time}
                required={false}
                number={false}
                max={""}
                className="animate-[fade_5s_ease-in-out]"
              />
            )}
            {!additionalSections.description && (
              <AddBlock
                title="DESCRIPTION"
                sections={additionalSections}
                add={() => {
                  updateAdditionalSections({
                    ...additionalSections,
                    description: !additionalSections.description,
                  });
                }}
              />
            )}

            {!additionalSections.time && (
              <AddBlock
                title="TIME"
                sections={additionalSections}
                add={() => {
                  updateAdditionalSections({
                    ...additionalSections,
                    time: !additionalSections.time,
                  });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRecipeDetails;
