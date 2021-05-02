import React from "react";
import homepageIllustration from "../assets/images/homepage-illustration.svg";
import homepageDesign from "../assets/images/homepage-design.svg";

const Home: React.FC = () => {
  return (
    <main>
      <img
        className="homepage_illustration"
        alt="person with packed bag looking at global"
        src={homepageIllustration}
      />
      <img className="homepage_design" alt="" src={homepageDesign} />
      <h1>Traveler</h1>
      <p className="homepage_desc">
        Traveling has never been so easy. Your favorite
        <br /> destination is 1-click away.
      </p>
      <button>Book Now</button>
    </main>
  );
};
export default Home;
