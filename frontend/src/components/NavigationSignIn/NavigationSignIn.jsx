import React from "react";
import "./NavigationSignIn.css";
import { Link } from "react-router-dom";

const NavigationSignIn = () => {
  return (
    <nav class="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src="./argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavigationSignIn;
