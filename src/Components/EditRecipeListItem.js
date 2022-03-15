// Import dependencies
import React from "react";
import { FiCheck } from "react-icons/fi";
import { RiTimeLine } from "react-icons/ri";

export default function EditRecipeListItem(props) {
  // Dynamic style based upon props
  let style =
    props.progress
      ? "bg-green-700"
      : "bg-orange-600";
  let icon = props.progress ? <FiCheck /> : <RiTimeLine />;

  return (
    <li
      onClick={() => props.showDetails()}
      className="flex items-center bg-neutral-100 p-5 mb-3 rounded hover:bg-neutral-200 active:bg-MatOrange"
    >
      <div className={"text-white h-fit p-2 rounded " + style}>{icon}</div>
      <div className="flex flex-col justify-center pl-3">
        <h6 className="text-sm">
          {props.progress ? "" : "In progress: "}
          {props.title}
        </h6>
        <p className="text-xs text-gray-400 m-0">{props.description}</p>
      </div>
    </li>
  );
}
