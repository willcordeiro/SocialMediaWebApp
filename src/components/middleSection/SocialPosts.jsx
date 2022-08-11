import React, { useState } from "react";
import Stories from "../Stories/Stories";
import Feed from "../feed/feed";
import Popups from "../pop-ups/pop-ups";
function SocialPosts() {
  const [Navbar, setNavbar] = useState(true);

  const ToggleSwitch = () => {
    Navbar ? setNavbar(false) : setNavbar(true);
  };

  return (
    <div>
      <div className="middle">
        {Navbar ? <Popups></Popups> : ""}
        <Stories />
        <Feed />
      </div>
    </div>
  );
}

export default SocialPosts;
