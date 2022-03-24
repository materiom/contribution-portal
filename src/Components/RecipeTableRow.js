// Import dependencies
import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { RiFileCopyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function RecipeTableRow(props) {
  // Used for navigation
  const history = useHistory();
  return (
    <tr className="whitespace-nowrap">
      <td className="px-6 py-4 max-w-[200px]">
        <div className="text-sm text-gray-900 overflow-hidden text-ellipsis">
          {props.key}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">{props.dateCreated}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500  rounded capitalize">
        <div
          className={
            "rounded p-1 text-center w-20 mx-auto " +
            (props.data.status === "approved"
              ? "bg-green-400"
              : "bg-orange-400")
          }
        >
          {props.data.status}
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {parseInt(props.data.views).toLocaleString()}
      </td>
      <td className="px-6 py-4 flex justify-around">
        <div
          onClick={() =>
            history.push(`/new-recipe`, {
              from: "/your-recipes",
            })
          }
          className="h-8 w-8 ml-3 text-white bg-MatBlue rounded flex justify-center items-center"
        >
          <BsPencilSquare />
        </div>
        <Link to={`/copy-recipe/${props.data.title}`} className="">
          <div className="h-8 w-8 ml-3 text-white bg-MatOrange rounded flex justify-center items-center">
            <RiFileCopyLine />
          </div>
        </Link>
        <Link to={`/delete-recipe/${props.data.title}`} className="">
          <div className="h-8 w-8 ml-3 text-white bg-MatRed rounded flex justify-center items-center">
            <BsTrash />
          </div>
        </Link>
      </td>
    </tr>
  );
}

export default RecipeTableRow;
