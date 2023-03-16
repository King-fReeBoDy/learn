import React from "react";
import Banner from "../components/Banner";
import Iframe from "../components/Iframe";
import Work from "../components/workComponent/Work";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Work />
      <Iframe />
    </div>
  );
};

export default Homepage;
