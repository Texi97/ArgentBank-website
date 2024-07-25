import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, checkLocalStorageToken } from "../features/login/authSlice";
import { useEffect } from "react";

function Navigation() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  useEffect(() => {
    // Vérification du token en local
    dispatch(checkLocalStorageToken()); // Si token récupéré alors isAuthenticated
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./argentBankLogo.webp"
          alt="Argent Bank Logo"
          loading="lazy"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {auth.userName}
            </Link>
            <Link className="main-nav-item" onClick={handleLogout} to="/">
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
