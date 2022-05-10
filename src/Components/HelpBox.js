// Import dependencies
import React from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import ArrowButton from "./ArrowButton";

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
          rel="noreferrer"
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
          rel="noreferrer"
        >
          Tweet Us
        </a>
      </div>

      <p className="text-xs py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <ArrowButton
        displayText="Read Guide"
        function={() =>
          window.open("https://materiom.org/contribute-guide", "_blank'")
        }
        color="blue"
      />
    </div>
  );
}
