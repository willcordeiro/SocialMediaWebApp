import React from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { SidebarItems } from "./Data/Data";
import Button from "../button/Button";
import { Notification } from "./Data/Data";
function SidebarProfileMenu() {
  return (
    <>
      <div className="left">
        <a className="profile">
          <div className="profile-photo">
            <img src="https://www.unrankedsmurfs.com/storage/blogposts/best-fan-art/rivenexile.jpg" />
          </div>
          <div className="handle">
            <h4>test</h4>
            <p className="text-muted">@test</p>
          </div>
        </a>
        <div className="sidebar">
          {SidebarItems.map((item, index) => (
            <a
              className={`menu-item ${item.activeItem}`}
              id={item.NavigationID}
              key={index}
            >
              <i>
                <small
                  className={
                    item.notificationsCount != "" ? " notification-count" : ""
                  }
                >
                  {item.notificationsCount}
                </small>
                {item.icon}

                <h3 className="siderbarItem">{item.text}</h3>
              </i>

              {/*   {item.notificationBar ? (
                <div className="backgroundnotifications">
                  {Notification.map((Notificationitem, Notificationindex) => (
                    <div
                      className="notifications-popup"
                      key={Notificationindex}
                    >
                      <div>
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
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )} */}
            </a>
          ))}
        </div>

        <Button forButton="create-post">Create post</Button>
      </div>
    </>
  );
}

export default SidebarProfileMenu;
