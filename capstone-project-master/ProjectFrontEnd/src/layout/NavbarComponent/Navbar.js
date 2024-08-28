import React from "react";
import { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/auth";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../../images/logo.png";

function Navbar() {
  const [show, setShow] = useState("true");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-custom mb-0">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="" className="logo-img"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse active"
          }
          id="navbarNav"
        >
          <div className="navbar-nav justify-content-center">
            {!auth.user && (
              <div className="nav-item">
                <NavLink className="nav-link btn btn-custom" to="/">
                  Home
                </NavLink>
              </div>
            )}
            {auth.user && (
              <div className="nav-item">
                <NavLink className="nav-link btn btn-custom" to="/dash">
                  Dashboard
                </NavLink>
              </div>
            )}

            <div className="nav-item">
              <NavLink className="nav-link btn btn-custom" to="/card">
                Cards
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink className="nav-link btn btn-custom" to="/loan">
                Loans
              </NavLink>
            </div>
            <div className="nav-item">
              <a className="nav-link btn btn-custom" href="/aboutus">
                About Us
              </a>
            </div>
            {!auth.user && (
              <div className="nav-item" style={{ textAlign: "center" }}>
                {/* <button className="btn btn-primary">
                  <Link to="/register">Register</Link>
                </button> */}
                <NavLink className="nav-link btn btn-custom" to="/register">
                  Register
                </NavLink>
              </div>
            )}
            {!auth.user && (
              <div className="nav-item" style={{ textAlign: "center" }}>
                {/* <button className="btn btn-primary">
                  <Link>Login</Link>
                </button> */}
                <NavLink className="nav-link btn btn-custom" to="/login">
                  Login
                </NavLink>
              </div>
            )}
            {auth.user && (
              <div
                className="nav-item"
                style={{ textAlign: "center" }}
                onClick={handleLogout}
              >
                <NavLink className="nav-link btn btn-custom">Logout</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
