import React from "react";
import CheckboxDropdown from "./CheckboxDropdown";

function FilterDropdown(props) {
  return (
    <form
      className={
        "transition-all w-full p-5 rounded-b-xl bg-white absolute flex justify-around flex-col items-center " +
        (!props.show && "hidden")
      }
    >
      <CheckboxDropdown updateSearchFilter={props.updateSearchFilter} />
    </form>
  );
}

export default FilterDropdown;
