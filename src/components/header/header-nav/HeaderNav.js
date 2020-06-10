import React, { Component } from "react";

import { HeaderMenu } from "./header-menu/HeaderMenu.js";

import "./HeaderNav.scss";

class HeaderNav extends Component {
  state = {
    showMenu: false,
  };

  onToggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };


  render() {
    return (
      <div>
      <div className="nav-button-wrap">
        <div
          className={!this.state.showMenu ? "nav-button" : "nav-button active"}
          onClick={this.onToggleMenu}
        >
          <span className="nav-button-first"></span>
          <span className="nav-button-mid"></span>
          <span className="nav-button-last"></span>
        </div>
        <span className="nav-button-wrap-text">Menu</span>
        </div>
        {this.state.showMenu && <HeaderMenu/>}
      </div>
    );
  }
}

export default HeaderNav;
