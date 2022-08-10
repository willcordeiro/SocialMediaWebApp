import React from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { SidebarItems } from "./Data/Data";

function SidebarProfileMenu() {
  return (
    <>
      <div className="sidebar">
        {SidebarItems.map((item, index) => (
          <div key={index}>
            <a className="menu-item">
              <span>
                {item.icon}
                <h3> {item.text}</h3>
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default SidebarProfileMenu;
