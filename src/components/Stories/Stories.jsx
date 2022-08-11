import React from "react";
import { Storie } from "./data/data";
import Input from "../input/Input";
function Stories() {
  return (
    <>
      <div className="Stories">
        <div className="story">
          {Storie.map((item, index) => (
            <div>
              <div className="profile-photo" key={index}>
                <img src={item.StorieImage} />
              </div>
              <p className="name">{item.StorieName}</p>
            </div>
          ))}
        </div>
      </div>
      <form className="create-post">
        <div className="profile-photo">
          <img src="https://i.pinimg.com/originals/d5/db/75/d5db75268064ba7846ad4d243cdc275b.jpg" />
        </div>
        <input
          type="text"
          placeholder="What's on your mind, user?"
          id="create-post"
        />
        <input
          type="submit"
          id="create-post"
          value="Post"
          className="btn btn-primary"
        />
      </form>
    </>
  );
}

export default Stories;
