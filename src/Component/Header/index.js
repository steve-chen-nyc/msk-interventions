import React from 'react';
import Logo from '../Icons/Logo';
import style from './style.module.css';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo
            color='#fff'
        />
      </div>
    </header>
  );
}

export default Header;
