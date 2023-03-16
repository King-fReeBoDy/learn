import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const ShareLayout = () => {
  return (
    <div>
      <Searchbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ShareLayout;
