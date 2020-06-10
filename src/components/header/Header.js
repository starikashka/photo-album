import React from "react";
import HeaderNav from "./header-nav/HeaderNav.js";

import Logo from "../../assets/logo.png";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <HeaderNav />
      <a href="#" className="header-logo">
        <img src={Logo} alt="Logo" />
      </a>
    </div>
  );
};
