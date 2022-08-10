import React from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { MdHome } from "react-icons/md";
function SidebarProfileMenu() {
  return (
    <>
      <div className="sidebar">
        <a className="menu-item">
          <span>
            <MdHome />
          </span>
        </a>
      </div>
    </>
  );
}

export default SidebarProfileMenu;
