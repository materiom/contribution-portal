// Import dependencies
import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { RiFileCopyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthorTag from "./AuthorTag";

function RecipeTableRow(props) {
  // Used for navigation
  const history = useHistory();
  return (
    <tr className="whitespace-nowrap"><td className="">{props.data.id}</td>
    <td>{props.data.content.recipeName}</td>
    <td>{props.data.content.difficulty}</td>
    <td>
      {(() => {
        const date = new Date(props.data.metadata.createdOn);
        return date.toLocaleString();
      })()}
    </td>
    <td>{props.data.content.quantity}</td>
    <td>
      <AuthorTag name={props.data.content?.authors} />
    </td>
    <td>{props.data.content.time}</td>
    <td>{props.data.content.description}</td>
    <td>
      <Link to={`/copy-recipe/${props.data.id}`} className="">
        <div className="h-8 w-8 ml-3 text-white bg-MatOrange rounded flex justify-center props.datas-center">
          <RiFileCopyLine className="m-auto" />
        </div>
      </Link>
    </td>
    </tr>
  );
}

export default RecipeTableRow;
