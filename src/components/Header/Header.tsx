import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';
import reactlogo from '../../assets/reactLogo.svg';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={reactlogo} alt="react logo" />
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
