import React from "react";
import { useLocation } from "react-router-dom";
// import NavigationSignIn from "../NavigationSignIn/NavigationSignIn";
// import NavigationSignOut from "../NavigationSignOut/NavigationSignOut";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Base = () => {
  // const location = useLocation();

  // const renderNavigation = () => {
  //   if (location.pathname === "/" || location.pathname === "/sign-in") {
  //     return <NavigationSignIn />;
  //   } else if (location.pathname === "/user") {
  //     return <NavigationSignOut />;
  //   }
  //   return null;
  // };

  return (
    <div>
      {/* {renderNavigation()} */}
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Base;
