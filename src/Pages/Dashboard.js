// Import dependencies
import React from "react";
import { BsBook, BsListUl, BsPencilSquare, BsSearch } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";

// Custom components
import DashboardListItem from "../Components/DashboardListItem";
import HelpBox from "../Components/HelpBox";
import useUpdateTitle from "../Hooks/UpdateTitle";

export default function Dashboard(props) {
  
  // Custom hook to update page title on initial load
  useUpdateTitle("Home");
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col w-full p-20">
        <div className="max-w-[40%]">
          <h6 className="text-gray-400">Materiom Contribution Portal</h6>
          <h2 className=" text-3xl">
            Welcome back {props.user.userObject.username}. 👋
          </h2>
          <p className="py-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <ul className="p-0">
              <DashboardListItem
                title={"Create a new recipe"}
                linkTo="/warning"
                icon={<BsPencilSquare />}
                iconColorClass={"bg-cyan-700"}
                description={
                  "Lorem ipsum tempor incididunt ut labore et aliqua."
                }
              />
              <DashboardListItem
                title={"Find an existing recipe as a template"}
                linkTo="/search"
                icon={<BsSearch />}
                iconColorClass={"bg-red-400"}
                description={
                  "Lorem ipsum tempor incididunt ut labore et aliqua."
                }
              />
              <DashboardListItem
                title={"Read the contribution guide"}
                linkTo="/guide"
                icon={<BsBook />}
                iconColorClass={"bg-red-600"}
                description={
                  "Lorem ipsum tempor incididunt ut labore et aliqua."
                }
              />
              <DashboardListItem
                title={"View your recipes"}
                linkTo="/your-recipes"
                icon={<BsListUl />}
                iconColorClass={"bg-blue-300"}
                description={
                  "Lorem ipsum tempor incididunt ut labore et aliqua."
                }
              />
              <DashboardListItem
                title={"Upload via csv"}
                icon={<FiUpload />}
                linkTo="/csv-upload"
                iconColorClass={"bg-teal-700"}
                description={
                  "Lorem ipsum tempor incididunt ut labore et aliqua."
                }
              />
            </ul>
          </div>

          <HelpBox />
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
