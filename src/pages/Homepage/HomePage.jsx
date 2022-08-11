import React from "react";
import SidebarProfileMenu from "../../components/sidebarProfileMenu/SidebarProfileMenu";
import SocialPosts from "../../components/middleSection/SocialPosts";
import RightSection from "../../components/rightSection/RightSection";
import "../Homepage/HomePage.css";

function HomePage() {
  return (
    <>
      <main>
        <div className="conta">
          <SidebarProfileMenu />
          <SocialPosts />
          <RightSection />
        </div>
      </main>
    </>
  );
}

export default HomePage;
