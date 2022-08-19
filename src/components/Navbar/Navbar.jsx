import React from "react";
import "./Navbar.css/Navbar.css";
import Input from "../input/Input";
import { MdOutlineSearch } from "react-icons/md";
import Button from "../button/Button";
import { FaMoon } from "react-icons/fa";
import { UserInfo } from "../sidebarProfileMenu/Data/Data";
import { MdAddBox } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="log">
          <FaMoon />
          Social
        </h2>
        <div className="search-bar">
          <MdOutlineSearch />

          <Input
            type="search"
            placeholder="Search for creators, inspirations, and projects"
          />
        </div>
        {UserInfo.map((item, index) => (
          <div className="create" key={index}>
            <MdAddBox className="AddSinal" />
            <div className="profile-photo">
              <img src={item.UserProfilePhoto} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
