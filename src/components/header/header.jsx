import React, { useState, useEffect } from 'react';
import classes from './header.module.scss';
import Logo from '../logo/logo.jsx';
import HeaderNav from '../header-nav/header-nav.jsx';
import HeaderActions from '../header-actions/header-actions.jsx';
import RegPopup from '../reg-popup/reg-popup.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen || popupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen, popupOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegClick = () => {
    setPopupOpen(true);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__containerBig}>
        <Logo />
        <HeaderNav isMenuOpen={isMenuOpen} />
        <HeaderActions handleRegClick={handleRegClick}/>
        <button className={`${classes.burger} ${isMenuOpen ? classes.opened : ''}`} onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {popupOpen && <RegPopup />}
      
    </header>
  );
};

export default Header;