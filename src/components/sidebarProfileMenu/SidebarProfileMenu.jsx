import React from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { SidebarItems } from "./Data/Data";
import { Notification } from "./Data/Data";
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
        {Notification.map((Notificationitem, Notificationindex) => (
          <div className="notifications-popup" key={Notificationindex}>
            <div className="profile-photo">
              <img src={Notificationitem.userProfilePic} />
            </div>
            <div className="notification-body">
              <b>{Notificationitem.userNotificationName}</b>
              {Notificationitem.notificationInfo}
              <small className="text-muted">
                {Notificationitem.notificationTime}
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SidebarProfileMenu;
