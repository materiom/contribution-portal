// Import dependencies
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiListUnordered, RiTBoxLine } from "react-icons/ri";

function EditRecipeDetails(props) {
  // Initialize state

  // Function to toggle the modal
  return (
      
    <div
      className={`overflow-hidden absolute
       z-50 h-modal md:h-full top-0 right-0 bottom-0 left-0 bg-gray-700 bg-opacity-70  ` + (props.show && "-z-10") }
    >
      <div className={" px-4 w-full max-w-4xl h-full absolute right-0 transition-all duration-500  "  + (props.show && "right-[-80%] bg-opacity-0 -z-10")}>
        <div className=" h-full bg-white rounded-lg shadow dark:bg-gray-300">
          <div className=" flex justify-start items-center p-5 rounded-t border-b dark:border-gray-600">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => props.showDetails()}
            >
              <svg
                onClick={() => props.showDetails()}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <h3 className="text-xl font-semibold lg:text-2xl text-black0">
              {props.recipe.title}
            </h3>
            <button className="blue-button ml-auto">
              Save
              <FiArrowUpRight />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="space-y-6 flex flex-col  my-5 bg-white rounded w-[400px] p-2">
              <label
                className="text-gray-400 text-xs flex justify-between"
                htmlFor="recipeName"
              >
                <h6 className="flex items-center ">
                  <RiTBoxLine className="mr-3" /> RECIPE TITLE
                </h6>
                <h6>Required</h6>
              </label>
              <input
                className="my-3 border-0 focus:rounded"
                label="recipeName"
                type="text"
              />
            </div>

            <div className="space-y-6 flex flex-col  my-5 bg-white rounded w-[400px] p-2">
              <label
                className="text-gray-400 text-xs flex justify-between"
                htmlFor="recipeName"
              >
                <h6 className="flex items-center ">
                  <RiTBoxLine className="mr-3" /> DIFFICULTY
                </h6>
                <h6>Required</h6>
              </label>
              <input
                className="my-3 border-0 focus:rounded"
                label="recipeName"
                type="text"
              />
            </div>

            <div className="space-y-6 flex flex-col  my-5 bg-white rounded w-[400px] p-2">
              <label
                className="text-gray-400 text-xs flex justify-between"
                htmlFor="recipeName"
              >
                <h6 className="flex items-center ">
                  <RiTBoxLine className="mr-3" /> OUTPUT QUANTITY
                </h6>
                <h6>Required</h6>
              </label>
              <input
                className="my-3 border-0 focus:rounded"
                label="recipeName"
                type="text"
              />
            </div>

            <div className="space-y-6 flex flex-col  my-5 bg-white rounded w-[400px] p-2">
              <label
                className="text-gray-400 text-xs flex justify-between"
                htmlFor="recipeName"
              >
                <h6 className="flex items-center ">
                  <RiListUnordered className="mr-3" /> AUTHORS
                </h6>
                <h6>Required</h6>
              </label>
              <input
                className="my-3 border-0 focus:rounded"
                label="recipeName"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={() => props.showDetails()}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditRecipeDetails;
