import React, { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { label: "Document", value: "Document" },
  { label: "User", value: "User" },
  { label: "Schema", value: "Schema" },
  { label: "Material", value: "Material" },
  { label: "Organization", value: "Organization" },
  { label: "Collection", value: "Collection" },
];

const CheckboxDropdown = (props) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    props.updateSearchFilter(selected.value);
  }, [selected]);

  return (
    <div className=" min-w-[90%] max-w-[90%] text-center">
      <h1 className="my-3">Type</h1>
      <Select
        hasSelectAll={false}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default CheckboxDropdown;
