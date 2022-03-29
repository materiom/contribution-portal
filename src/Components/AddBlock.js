import React from "react";
import { BsFillPlusSquareFill, BsPlus } from "react-icons/bs";
import { RiTBoxLine } from "react-icons/ri";

function AddBlock(props) {
  return (
    <div className="transition-all space-y-6 flex flex-row items-center justify-center my-5 bg-white rounded w-[400px] p-2">
      <span className="flex flex-1 w-min items-center  text-gray-400 text-xs">
        <RiTBoxLine className="mr-3" /> {props.title}
      </span>
      <BsFillPlusSquareFill
        onClick={() => {
          props.add();
        }}
        className="ml-auto my-auto h-8 w-8 text-zinc-400"
      />
    </div>
  );
}

export default AddBlock;
