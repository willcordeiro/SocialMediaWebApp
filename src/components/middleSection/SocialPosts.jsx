import React, { useState } from "react";
import Stories from "../Stories/Stories";
import Feed from "../feed/feed";

function SocialPosts() {
  return (
    <div>
      <div className="middle">
        <Stories />
        <Feed />
      </div>
    </div>
  );
}

export default SocialPosts;
