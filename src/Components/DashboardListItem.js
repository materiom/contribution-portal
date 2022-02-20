import React from "react";
import { Link } from "react-router-dom";

export default function DashboardListItem(props) {
  return (
    <Link to={props.linkTo}>
      <li className="flex items-center bg-neutral-100 p-5 mb-3 rounded">
        <div className={"text-white h-fit p-2 rounded " + props.iconColorClass}>
          {props.icon}
        </div>
        <div className="flex flex-col justify-center pl-3">
          <h6 className="text-sm">{props.title}</h6>
          <p className="text-xs text-gray-400 m-0">{props.description}</p>
        </div>
      </li>
    </Link>
  );
}
