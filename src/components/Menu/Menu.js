import React, { useState } from 'react';
import BEM from '../../helpers/BEM';
import './Menu.scss';

const b = BEM('Menu');

const Menu = () => {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <div className={b()}>
      <button onClick={() => setMenu(!isMenuOpen)} className={b('menu-toggle')}>
        <span className={b('icon')}>I</span>
        Menu
      </button>
      <navigation className={b('navigation', { open: isMenuOpen })}>
        <a href="" className={b('item')}>
          First link
        </a>
        <a href="" className={b('item')}>
          Second link
        </a>
      </navigation>
    </div>
  );
};
export default Menu;
