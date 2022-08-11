import React from "react";
import { FeedIcons } from "./data/data";
import { userFeedProfile } from "./data/data";
import { likedBy } from "./data/data";
import { comments } from "./data/data";
import "./feed.css";
function Feed() {
  return (
    <>
      <div className="feeds">
        <div className="feed">
          {userFeedProfile.map((item, index) => (
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src={item.userProfilePhoto} />
                </div>
                <div className="ingo">
                  <h3>{item.userName}</h3>
                  <small></small>
                </div>
                <span className="edit">{item.userEllIcon}</span>
              </div>
            </div>
          ))}
          <div className="photo">
            <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc315a26ed0d1220c/6025d6ae3e70bb4c12c71fd6/2021_2_15_NasusKim.jpg" />
          </div>
          {FeedIcons.map((item, index) => (
            <div className="action-button">
              <div className="interaction-buttons" key={index}>
                <span>{item.feedHeartIcon}</span>
                <span>{item.feedCommentsIcon}</span>
                <span>{item.feedShareIcon}</span>
              </div>
              <div className="bookmark">
                <span>{item.feedBookMark}</span>
              </div>
            </div>
          ))}
          {likedBy.map((item, index) => (
            <div className="liked-by" key={index}>
              <span>
                <img src={item.userPhoto} />
              </span>
              <span>
                <img src={item.userPhoto2} />
              </span>
              <span>
                <img src={item.userPhoto3} />
              </span>
              <p>Liked by</p> <b>{item.userName}</b> and{" "}
              <p>{item.numbersOfLikes}</p> others
            </div>
          ))}
          {comments.map((item, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
