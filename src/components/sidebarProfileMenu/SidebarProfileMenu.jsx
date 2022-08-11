import React, { useState } from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { SidebarItems } from "./Data/Data";
import Button from "../button/Button";
import Popups from "../pop-ups/pop-ups";
import { UserInfo } from "./Data/Data";
function SidebarProfileMenu() {
  const [Navbar, setNavbar] = useState(false);

  const ToggleSwitch = () => (Navbar ? setNavbar(false) : setNavbar(true));

  return (
    <>
      {Navbar ? <Popups CloseFunction={ToggleSwitch}></Popups> : ""}
      <div className="left">
        <a className="profile">
          {UserInfo.map((item, index) => (
            <div key={index}>
              <div className="profile-photo">
                <img src={item.UserProfilePhoto} />
              </div>
              <div className="handle">
                <b>{item.CurrentUserName}</b>
                <small className="text-muted"> {item.UserEmail}</small>
              </div>
            </div>
          ))}
        </a>

        <div className="sidebar">
          {SidebarItems.map((item, index) => (
            <a
              className="menu-item"
              id={item.NavigationID}
              key={index}
              onClick={item.notificationBar !== undefined ? ToggleSwitch : ""}
            >
              <span>
                <i>{item.icon}</i>
                <i>
                  <small
                    className={
                      item.notificationsCount !== ""
                        ? " notification-count"
                        : ""
                    }
                  >
                    {item.notificationsCount}
                  </small>
                </i>
              </span>
              <h3 className="siderbarItem">{item.text}</h3>
            </a>
          ))}
        </div>

        <Button forButton="create-post">Create post</Button>
      </div>
    </>
  );
}

export default SidebarProfileMenu;
