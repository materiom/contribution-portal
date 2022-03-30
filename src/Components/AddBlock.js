import React from "react";
import { BsFillPlusSquareFill, BsPlus } from "react-icons/bs";
import { RiTBoxLine } from "react-icons/ri";

function AddBlock(props) {
  return (
    <div
      className={
        "transition-all space-y-6 flex flex-row justify-between items-center text-gray-400 my-5 bg-white rounded w-[400px] p-2 " +
        props?.additionalClasses
      }
    >
      <span style={ props?.upright ? {textOrientation: "upright"} : {}} className="flex flex-1 w-min text-xs [text-orientation: upright]">
        <RiTBoxLine className="mr-3 mb-3 " />{props.title}
      </span>
      <BsFillPlusSquareFill
        onClick={() => {
          props.add();
        }}
        className="my-auto h-8 w-8 text-zinc-400"
      />
    </div>
  );
}

export default AddBlock;
