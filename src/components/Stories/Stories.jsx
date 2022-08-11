import React from "react";
import { Storie } from "./data/data";
import "./Stories.css";
function Stories() {
  return (
    <>
      <div className="middle">
        <div className="stories">
          {Storie.map((item, index) => (
            <div className="story">
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
          <div className="profile-photo">
            <img src="https://i.pinimg.com/originals/d5/db/75/d5db75268064ba7846ad4d243cdc275b.jpg" />
          </div>
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
