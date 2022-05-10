import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AuthorTag from "./AuthorTag";

function SearchResultsTableRow(props) {
    return (
        <tr key={props.data.id} className="text-center border-2 border-gray-700">
            <td className="">{props.data.id}</td>
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

export default SearchResultsTableRow;
