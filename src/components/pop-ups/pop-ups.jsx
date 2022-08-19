import React from "react";
import { Notification } from "../sidebarProfileMenu/Data/Data";
import "./popup.css";
import { HiOutlineXCircle } from "react-icons/hi";

function Popups({ CloseFunction }) {
  return (
    <>
      <div className="backgroundnotifications">
        <i className="Xicon" onClick={CloseFunction}>
          <HiOutlineXCircle />
        </i>
        {Notification.map((Notificationitem, Notificationindex) => (
          <div className="notifications-popup" key={Notificationindex}>
            <div className="notification-data">
              <div className="">
                <img
                  src={Notificationitem.userProfilePic}
                  className="notificationImage"
                />
              </div>

              <div className="notification-body">
                <b>{Notificationitem.userNotificationName}</b>
                <p> {Notificationitem.notificationInfo}</p>

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
