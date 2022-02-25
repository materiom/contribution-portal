import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPatchCheck } from "react-icons/bs";

export default function SubmissionConfirmation() {
  return (
    <div className="m-auto w-[500px] h-[500px] p-3 rounded flex flex-col items-center justify-around text-center bg-slate-50">
      <div className="flex flex-col items-center">
        <BsPatchCheck className="text-6xl mb-3" />
        <h6 className="text-gray-400">Materiom Contribution Portal</h6>
        <h2 className=" text-3xl font-bold">Recipe submitted</h2>
      </div>
      <p className="py-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col justify-start">
        <div className="flex justify-around my-5">
          <Link to="/">
            <button className="red-button">
              Return to dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
