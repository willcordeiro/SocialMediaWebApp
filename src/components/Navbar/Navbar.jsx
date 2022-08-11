import React from "react";
import "./Navbar.css/Navbar.css";
import Input from "../input/Input";
import { MdOutlineSearch } from "react-icons/md";
import Button from "../button/Button";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="log">SocialMedia</h2>
        <div className="search-bar">
          <MdOutlineSearch />

          <Input
            type="search"
            placeholder="Search for creators, inspirations, and projects"
          />
        </div>
        <div className="create">
          <Button forButton="create-post">New Post</Button>
          <div className="profile-photo">
            <img src="https://i1.sndcdn.com/avatars-co78lxGHlvdiOCIN-22MCCg-t500x500.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
