import React from "react";
import { UserInfo } from "../sidebarProfileMenu/Data/Data";
import { Storie } from "./data/data";
import "./Stories.css";
function Stories() {
  return (
    <>
      <div>
        <div className="stories">
          {Storie.map((item, index) => (
            <div className="story" key={index}>
              <div key={index}>
                <div className="profile-photo">
                  <img src={item.StorieImage} />
                </div>
              </div>
              <p className="name">{item.StorieName}</p>
            </div>
          ))}
        </div>
        <form className="create-post">
          {UserInfo.map((item, index) => (
            <div className="profile-photo" key={index}>
              <img src={item.UserProfilePhoto} />
            </div>
          ))}
          <input
            type="text"
            placeholder="What's on your mind, user?"
            id="create-post"
            className="btn btn-primary"
          />
          <input
            type="submit"
            id="create-post"
            value="Post"
            className="btn btn-primary"
          />
        </form>
      </div>
    </>
  );
}

export default Stories;
