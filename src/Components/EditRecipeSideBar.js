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

import Icon from "./Icon";
import { BsListUl, BsPencilSquare, BsSearch } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { FaFolder } from "react-icons/fa";

export default function EditRecipeSideBar(props) {
  const [collapsed, toggleMenuCollapse] = useState(false);
  return (
    <ProSidebar
      id="edit-sidebar"
      data-testid="sidebarMain"
      collapsed={collapsed}
    >
      <SidebarHeader
      className="p-3"
        data-testid="sidebarToggle"
        onClick={() => toggleMenuCollapse(!collapsed)}
      >
        <h1 className="text-lg text-center capitalize"><b>{props.recipeTitle}</b></h1>
      </SidebarHeader>
      <Menu>
        <SubMenu title="Recipe Details" icon={<FaFolder />}>
          <MenuItem>
            <Link to="/published">Published</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/drafts">Drafts</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/templates">Templates</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Recipe Ingredients" icon={<FaFolder />}>
          <MenuItem>
            <Link to="/published">Published</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/drafts">Drafts</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/templates">Templates</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Recipe Method" icon={<FaFolder />}>
          <MenuItem>
            <Link to="/published">Published</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/drafts">Drafts</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/templates">Templates</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Recipe Images" icon={<FaFolder />}>
          <MenuItem>
            <Link to="/published">Published</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/drafts">Drafts</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/templates">Templates</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
