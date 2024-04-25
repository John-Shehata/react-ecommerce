import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* Header Top */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo}></img>
                </Link>
              </div>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              {/* Menu pages */}
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Signup & Login */}
              {/* Show at medium and large screens */}
              {/* Not Show at small screens */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Log in
              </Link>

              {/* Menu Toggler */}
              {/* Show at medium and small screens */}
              {/* Not Show at large screens */}
              <div
                onClick={() => {
                  setMenuToggle(!menuToggle);
                }}
                className={`header-bar d-lg-none ${
                  menuToggle ? "active" : ""
                } `}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social Toggler */}
              {/* Show at small and large screens */}
              {/* Not Show medium at screens */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => {
                  setSocialToggle(!socialToggle);
                }}
              >
                <i className="icofont-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
