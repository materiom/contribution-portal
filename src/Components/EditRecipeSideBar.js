// Import dependencies
import React, { useState } from "react";
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
    const [showDetailsSubMenu, toggleShowDetailsSubMenu] = useState(true)
  return (
    <ProSidebar
      className="z-10 p-0"
      id="edit-sidebar"
      data-testid="sidebarMain"
      collapsed={false}
    >
      <SidebarHeader className="p-3 border-b-0" data-testid="sidebarToggle">
        <h1 className="text-lg text-center capitalize">
          <b>{props.recipeToEdit && props.recipeToEdit.content.recipeName}</b>
        </h1>
      </SidebarHeader>
      <Menu>
        <SubMenu
          open={showDetailsSubMenu}
          onClick={() => toggleShowDetailsSubMenu(!showDetailsSubMenu)}
          className="border-y border-white first:p-0"
          title="Recipe Details"
          icon={<FaFolder />}
        >
          <MenuItem>
            <button onClick={() => props.showDetails()}>
              Title:{" "}
              {props.recipeToEdit && props.recipeToEdit.content.recipeName}
            </button>
          </MenuItem>
          <MenuItem>
            <button onClick={() => props.showDetails()}>
              Difficulty:{" "}
              {props.recipeToEdit && props.recipeToEdit.content.difficulty}/5
            </button>
          </MenuItem>
          <MenuItem>
            <button onClick={() => props.showDetails()}>
              Authors:{" "}
              {props.recipeToEdit && props.recipeToEdit.content.authors}
            </button>
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
