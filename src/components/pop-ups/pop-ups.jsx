import React from "react";
import { Notification } from "../sidebarProfileMenu/Data/Data";
import "./popup.css";
import Button from "../button/Button";
import { HiOutlineXCircle } from "react-icons/hi";

function Popups() {
  return (
    <>
      <div className="backgroundnotifications">
        <i className="Xicon">
          <HiOutlineXCircle />
        </i>
        {Notification.map((Notificationitem, Notificationindex) => (
          <div className="notifications-popup" key={Notificationindex}>
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
        <br />
      </div>
    </>
  );
}

export default Popups;
