import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";

const LayOut = () => {
  return (
    <React.Fragment>
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LayOut;
