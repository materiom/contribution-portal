import React from "react";
import XButton from "./XButton";

function AuthorTag(props) {
  return (
    <div className="flex items-center h-fit w-fit p-2 m-1 text-ellipsis text-xs rounded bg-MatBlue">
      <p>{props?.name}</p>

      <XButton buttonFunction={() => props.removeAuthor()} />
    </div>
  );
}

export default AuthorTag;
