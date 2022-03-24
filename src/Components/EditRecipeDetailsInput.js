import React from "react";
import { BsX } from "react-icons/bs";
import { RiTBoxLine } from "react-icons/ri";

function EditRecipeDetailsInput(props) {
  const CustomTag = props.type;  
  const title = props.title
  const dynamicValue = props.title
  return (
    <div className="mb-1 flex flex-col max-h-[200px] my-3 bg-white rounded w-[400px] p-2">
      <label
        className="text-gray-400 text-xs flex justify-between"
        htmlFor="difficulty"
      >
        <h6 className="flex items-center ">
          <RiTBoxLine className="mr-3" /> {props.title.toUpperCase()}
        </h6>
        <h6>{props.required ? "Required" : <BsX className="text-2xl rounded hover:bg-slate-500"/>}</h6>
      </label>
      <CustomTag
        max={props.max}
        className="my-3 max-h-30 border-0 focus:rounded"
        value={props.value}
        onChange={(event) => {
          props.updateRecipe(event);
        }}
        label={props.title}
        name={props.title}
        type={props.number ? "number" : "text"}
      />
    </div>
  );
}

export default EditRecipeDetailsInput;
