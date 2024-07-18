import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Base;
