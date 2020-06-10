import React, { useState } from 'react';
import Menu from '../Menu/Menu.js';
import BEM from '../../helpers/BEM';
import './NewHeader.scss';
const b = BEM('NewHeader');

const NewHeader = () => (
  <div className={b({ 'show-grid': false })}>
    <section className={b('wrapper')}>
      <div className={b('menu')}>
        <Menu />
      </div>
      <div className={b('logo')}>Logo</div>
    </section>
  </div>
);

export default NewHeader;
