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
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export default function SideBar() {
  const [collapsed, toggleMenuCollapse] = useState(true);
  return (
    <ProSidebar data-testid="sidebarMain" collapsed={collapsed}>
      <SidebarHeader
        data-testid="sidebarToggle"
        onClick={() => toggleMenuCollapse(!collapsed)}
      >
        <Icon customClassName={"mx-auto"} />
      </SidebarHeader>
      <BrowserRouter>
      <Menu iconShape="square">
        <MenuItem icon={<BsPencilSquare />}>
          <Link exact to="/new">Dashboard</Link>
        </MenuItem>
        <MenuItem icon={<BsSearch />}>
          <Link to="/search">Find Recipe</Link>
        </MenuItem>
        <SubMenu title="Recipes" icon={<BsListUl />}>
          <MenuItem>
            <Link  to="/published">
              Published
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/drafts">Drafts</Link>
          </MenuItem>
          <MenuItem><Link to="/templates">Templates</Link></MenuItem>
        </SubMenu>
        <MenuItem  icon={<IoMdExit />}>
          <Link to="/">Exit</Link>
        </MenuItem>
      </Menu>
      </BrowserRouter>
    </ProSidebar>
  );
}
