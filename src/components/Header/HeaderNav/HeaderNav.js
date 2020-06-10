import React, { Component, useState } from 'react';
import { HeaderMenu } from './HeaderMenu/HeaderMenu.js';
import './HeaderNav.scss';

const HeaderNav = () => {
  const [isMenuShowed, setMenu] = useState(false);

  return (
    <div>
      <div className="nav-button-wrap">
        <div className={isMenuShowed ? 'nav-button active' : 'nav-button '} onClick={() => setMenu(!isMenuShowed)}>
          <span className="nav-button-first"></span>
          <span className="nav-button-mid"></span>
          <span className="nav-button-last"></span>
        </div>
        <span className="nav-button-wrap-text">Menu</span>
      </div>
      {isMenuShowed && <HeaderMenu />}
    </div>
  );
};

export default HeaderNav;
