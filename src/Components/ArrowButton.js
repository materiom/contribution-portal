import React from "react";
import { FiArrowRight } from "react-icons/fi";

function ArrowButton(props) {
  return (
    <button
      onClick={() => props.function()}
      className={`${props.color}-button`}
      disabled={props.isDisabled && true}
    >
      {props.displayText}
      <FiArrowRight />
    </button>
  );
}

export default ArrowButton;
