import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";
import { RiTBoxLine } from "react-icons/ri";
import getRandomColor from "../Hooks/getRandomColor";

function EditRecipeIngredientsInput(props) {
  let randomColor = getRandomColor();
  
  return (
    <div
      style={{borderColor: randomColor}}
      className="mb-1 flex flex-col max-h-[200px] bg-white rounded w-[400px] p-2 border-2 border-"
    >
      <label
        className="text-gray-400 text-xs flex justify-between"
        htmlFor="difficulty"
      >
        <h6 className="flex items-center ">
          <RiTBoxLine className="mr-3" /> {props.title.toUpperCase()}
        </h6>
      </label>

      <input
        className="my-3 max-h-30 border-0 focus:rounded"
        type="text"
        value={props.ingredientDetails?.ingredient}
      />

      <label className="text-gray-400 text-xs flex justify-between">
        <h6 className="flex items-center ">
          <RiTBoxLine className="mr-3" /> AMOUNT
        </h6>
      </label>

      <input
        className="my-3 max-h-30 border-0 focus:rounded"
        type="text"
        value={props.ingredientDetails?.amount}
      />
    </div>
  );
}

export default EditRecipeIngredientsInput;
