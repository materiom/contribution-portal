// Import dependencies
import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";

export default function EditRecipeSideBar(props) {
  return (
    <ProSidebar
      className="z-10 p-0"
      id="edit-sidebar"
      data-testid="sidebarMain"
      collapsed={false}
    >
      <SidebarHeader className="p-3 border-b-0" data-testid="sidebarToggle">
        <h1 className="text-lg text-center capitalize">
          <b>{props.recipe.title}</b>
        </h1>
      </SidebarHeader>
      <Menu>
        <SubMenu
          className="border-y border-white first:p-0"
          title="Recipe Details"
          icon={<FaFolder />}
        >
          <MenuItem>
            <button onClick={() => props.showDetails()}>
              Title: {props.recipe.title}
            </button>
          </MenuItem>
          <MenuItem>
            <Link to="/drafts">Difficulty: {props.recipe.difficulty}/5</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/templates">
              Author{props.recipe.authors.length > 1 ? "s" : ""}:{" "}
              {props.recipe.authors[0]} + {props.recipe.authors.length - 1} more
            </Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="border-b border-white"
          title="Recipe Ingredients"
          icon={<FaFolder />}
        ></SubMenu>
        <SubMenu
          className="border-b border-white"
          title="Recipe Method"
          icon={<FaFolder />}
        ></SubMenu>
        <SubMenu
          className="border-b border-white"
          title="Recipe Images"
          icon={<FaFolder />}
        ></SubMenu>
      </Menu>
    </ProSidebar>
  );
}
