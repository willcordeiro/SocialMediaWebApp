import React from "react";
import "./Navbar.css/Navbar.css";
import Input from "../input/Input";
import { MdOutlineSearch } from "react-icons/md";
import Button from "../button/Button";
import { FaMoon } from "react-icons/fa";
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
        <div className="create">
          <Button forButton="create-post">New Post</Button>
          <div className="profile-photo">
            <img src="https://www.unrankedsmurfs.com/storage/blogposts/best-fan-art/rivenexile.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
