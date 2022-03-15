// Import dependencies
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
        <a
          className="ml-3 text-sm text-cyan-600"
          href="mailto:hello@materiom.org"
          target="_blank"
        >
          Contact Support
        </a>
      </div>
      <div className="flex mb-3">
        <FiTwitter />
        <a
          className="ml-3 text-sm text-cyan-600"
          href="https://twitter.com/materiom_"
          target="_blank"
        >
          Tweet Us
        </a>
      </div>

      <p className="text-xs py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <Link t to="https://materiom.org/contribute-guide">
        <button className="flex text-white text-xs p-2 bg-teal-600 rounded w-32 justify-around items-center">
          Read Guide
          <FiArrowUpRight />
        </button>
      </Link>
    </div>
  );
}
