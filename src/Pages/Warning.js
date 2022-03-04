// Import dependencies
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegHandPaper } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// Import custom hooks
import useUpdateTitle from "../Hooks/UpdateTitle";

export default function Warning() {
  // Custom hook to update page title on initial load
  useUpdateTitle("Warning");
  const history = useHistory();
  const [cb1, handleCb1Update] = useState(false);
  const [cb2, handleCb2Update] = useState(false);
  const [cb3, handleCb3Update] = useState(false);

  const handleCheckboxes = (cb) => {
    cb === 1
      ? handleCb1Update(!cb1)
      : cb === 2
      ? handleCb2Update(!cb2)
      : handleCb3Update(!cb3);
  };

  return (
    <div className="m-auto w-[500px] h-[500px] p-3 rounded flex flex-col items-center justify-around text-center bg-slate-50">
      <div className="flex flex-col items-center">
        <FaRegHandPaper className="text-6xl mb-3" />
        <h6 className="text-gray-400">Materiom Contribution Portal</h6>
        <h2 className=" text-3xl font-bold">Before you start!</h2>
      </div>
      <p className="py-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col justify-start">
        <div className="flex justify-start">
          <input
            onClick={() => handleCheckboxes(1)}
            checked={cb1}
            type="checkbox"
            id="warningCheckbox1"
            className="custom-checkbox"
          />
          <label htmlFor="warningCheckbox1">
            Dolce et decorum est pro patria mori.
          </label>
        </div>
        <div className="flex justify-start">
          <input
            onClick={() => handleCheckboxes(2)}
            checked={cb2}
            type="checkbox"
            id="warningCheckbox2"
            className="custom-checkbox"
          />
          <label className="form-check-label" htmlFor="warningCheckbox2">
            Cogito, ergo sum.
          </label>
        </div>
        <div className="flex justify-start">
          <input
            onClick={() => handleCheckboxes(3)}
            checked={cb3}
            type="checkbox"
            id="warningCheckbox3"
            className="custom-checkbox"
          />
          <label htmlFor="warningCheckbox3">Utile Dulci.</label>
        </div>
        <div className="flex justify-around my-5">
          <Link to="/">
            <button className="red-button">Back</button>
          </Link>
          <button
            onClick={() => history.push("/new-recipe", { from: "/warning" })}
            disabled={cb1 === false || cb2 === false || cb3 === false}
            className="blue-button"
          >
            Continue
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
