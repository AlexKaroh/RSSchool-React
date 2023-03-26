import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';
import dotalogo from '../../assets/dotalogo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pageTitle = location.pathname.substring(1);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={dotalogo} alt="dota logo" />
        </Link>
        <h1 className="header__page">{pageTitle === '' ? 'Home' : pageTitle}</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
