import React from "react";
import { FeedRoll } from "./data/data";

import "./feed.css";
function Feed() {
  return (
    <>
      <div className="feeds">
        {FeedRoll.map((item, index) => (
          <div className="feed" key={index}>
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src={item.userProfilePhoto} />
                </div>
                <div className="ingo">
                  <h3>{item.userName}</h3>
                  <small>
                    {item.PostLocations}, {item.PostMoment}
                  </small>
                </div>
                <span className="edit">{item.userEllIcon}</span>
              </div>
            </div>

            <div className="photo">
              <img src={item.FeedImage} />
            </div>

            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>{item.feedHeartIcon}</span>
                <span>{item.feedCommentsIcon}</span>
                <span>{item.feedShareIcon}</span>
              </div>
              <div className="bookmark">
                <span>{item.feedBookMark}</span>
              </div>
            </div>

            <div className="liked-by">
              <span>
                <img src={item.userPhoto} />
              </span>
              <span>
                <img src={item.userPhoto2} />
              </span>
              <span>
                <img src={item.userPhoto3} />
              </span>
              <p>
                Liked by <b>{item.userName}</b> and{" "}
                <b>{item.numbersOfLikes} others</b>
              </p>
            </div>

            <div>
              <div className="caption">
                <p>
                  <b>{item.UserNameComments}</b>
                  {item.UserTextComments}
                  <span className="harsh-tag">{item.CommentsTag}</span>
                </p>
              </div>

              <div className="text-muted">
                View all {item.CommentsView} comments
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Feed;
