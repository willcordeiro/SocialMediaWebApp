import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineSearch } from "react-icons/md";
import Input from "../input/Input";
import { requests } from "./data/data";
import { messages } from "./data/data";
import Button from "../button/Button";
import "./RightSection.css";
import { Friendrequest } from "./data/data";

function RightSection() {
  return (
    <div className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <i>
            <AiOutlineEdit />
          </i>
        </div>
        <div className="search-bar">
          <MdOutlineSearch />

          <Input
            type="search"
            placeholder="Search messages"
            id="message-search"
            className="Message-Input"
          />
        </div>
        <div className="category">
          {requests.map((item, index) => (
            <div key={index}>
              <h6 className="active">Requests({item.requestNumber})</h6>
            </div>
          ))}
        </div>

        <div className="message">
          {messages.map((item, index) => (
            <div key={index} className="containerMessage">
              <div className="profile-photo ">
                <img src={item.userImage} className="rightprofile" />
              </div>

              <div className="message-body">
                <h5>{item.userName}</h5>
                <p className="messageReceived">{item.UserMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="friend-requests">
        <h4>Requests</h4>
        {Friendrequest.map((item, index) => (
          <div className="request" key={index}>
            <div className="info">
              <div>
                <img
                  src={item.userProfileImage}
                  className="rightprofileRequest"
                />
              </div>
              <div>
                <h5>{item.userName}</h5>
                <p className="text-muted">
                  {item.MutualFriends} mutual friends
                </p>
              </div>
            </div>
            <div className="action">
              <Button className="btn btn-primary">Accept</Button>
              <button className="btn">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSection;
