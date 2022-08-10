import React from "react";
import "./SidebarProfileMenu/SidebarProfileMenu.css";
import { SidebarItems } from "./Data/Data";
import Button from "../button/Button";
import { Notification } from "./Data/Data";
function SidebarProfileMenu() {
  return (
    <>
      <div className="conta">
        <div className="left">
          <a className="profile">
            <div className="profile-photo">
              <img src="https://cdn.dribbble.com/users/454765/screenshots/5825882/penguin_32x32px_400x300_new_still.gif?compress=1&resize=400x300" />
            </div>
            <div className="handle">
              <h4>adasdasd</h4>
              <p className="text-muted">@dada</p>
            </div>
          </a>
          <div className="sidebar">
            {SidebarItems.map((item, index) => (
              <div key={index} className={`menu-item ${item.activeItem}`}>
                <a className="menu-item" id={item.NavigationID}>
                  <span>
                    {item.icon}
                    <small>{item.notificationsCount}</small>
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
            <Button forButton="create-post">Create post</Button>
          </div>{" "}
        </div>
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </div>
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </div>{" "}
      </div>
    </>
  );
}

export default SidebarProfileMenu;
