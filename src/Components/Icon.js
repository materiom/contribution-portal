// Import dependencies
import React from "react";

export default function Icon(props) {
    return (
      <img
        src={require("./../Assets/Images/logo.png")}
        className={props.customClassName}
        alt="Company logo"
        height={10}
        width={30}
      />
    );
  }