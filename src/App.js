import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage/HomePage";
import SocialPosts from "./components/middleSection/SocialPosts";
import RightSection from "./components/rightSection/RightSection";
function App() {
  return (
    <div>
      <Navbar />
      <br></br> <br></br>
      <main>
        <div className="conta">
          <HomePage />
          <SocialPosts />
          <RightSection />
        </div>
      </main>
    </div>
  );
}

export default App;
