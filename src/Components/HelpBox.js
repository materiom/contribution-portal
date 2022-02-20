import React from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { FiArrowUpRight, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HelpBox() {
  return (
    <div className="bg-white ml-10 max-w-[200px] w-[30%] p-5 rounded max-h-[300px]">
      <h6>Need help?</h6>
      <p className="text-xs py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <div className="flex mb-3">
        <IoMdPaperPlane />
        <a className="ml-3 text-sm text-cyan-600" href="https://www.google.com" target="_blank">
          Contact Support
        </a>
      </div>
      <div className="flex mb-3">
        <FiTwitter />
        <a className="ml-3 text-sm text-cyan-600" href="https://www.google.com" target="_blank">
          Tweet Us
        </a>
      </div>

      <p className="text-xs py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <button className="flex text-white text-sm p-2 bg-teal-600 rounded w-32 justify-around items-center">
        <Link to="/guide">Read Guide</Link>
        <FiArrowUpRight />
      </button>
    </div>
  );
}
