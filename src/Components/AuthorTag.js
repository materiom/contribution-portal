import React from "react";

function AuthorTag(props) {
  return (
    <div className="flex items-center h-fit w-fit p-2 m-1 text-ellipsis text-xs rounded bg-MatBlue">
      <p>{props?.name}</p>

      <svg
        onClick={() => props.removeAuthor()}
        className="w-3 h-3 mt-1"
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
    </div>
  );
}

export default AuthorTag;
