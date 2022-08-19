import React, { useState } from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { SidebarItems } from "./Data/Data";
import Button from "../button/Button";
import Popups from "../pop-ups/pop-ups";
import { UserInfo } from "./Data/Data";
import Theme from "../theme/Theme";
function SidebarProfileMenu() {
  const [Navbar, setNavbar] = useState(false);
  const [ThemeChanger, setThemeChanger] = useState(false);

  const ToggleSwitch = () => (Navbar ? setNavbar(false) : setNavbar(true));
  const ToggleSwitchTheme = () =>
    ThemeChanger ? setThemeChanger(false) : setThemeChanger(true);

  return (
    <>
      {Navbar ? <Popups CloseFunction={ToggleSwitch}></Popups> : ""}
      {ThemeChanger ? <Theme CloseFunction={ToggleSwitchTheme}></Theme> : ""}
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
              onClick={() => {
                if (item.notificationBar !== undefined) {
                  return ToggleSwitch();
                } else if (item.notificationsTheme !== undefined) {
                  return ToggleSwitchTheme();
                }
              }}
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
