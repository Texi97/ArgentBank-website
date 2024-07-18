import React from "react";
import "./NavigationSignOut.css";
import { Link } from "react-router-dom";

const NavigationSignOut = () => {
  return (
    <div className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src="./argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/user">
          <i class="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link className="main-nav-item" to="/">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default NavigationSignOut;
