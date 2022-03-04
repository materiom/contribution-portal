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

export default function SideBar() {
  return (
    <ProSidebar className="" data-testid="sidebarMain" collapsed={true}>
      <SidebarHeader
        data-testid="sidebarToggle"
      >
        <Icon customClassName={"mx-auto"} />
      </SidebarHeader>
      <Menu innerSubMenuArrows="true" iconShape="round">
        <MenuItem icon={<BsPencilSquare />}>
          <Link $exact={true} to="/warning">
            New Recipe
          </Link>
        </MenuItem>
        <MenuItem icon={<BsSearch />}>
          <Link to="/search">Find Recipe</Link>
        </MenuItem>
        <MenuItem icon={<BsListUl />}>
          <Link to="/your-recipes">Your Recipes</Link>
        </MenuItem>
        <MenuItem icon={<IoMdExit />}>
          <Link to="/">Exit</Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}
