import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';
import dotalogo from '../../assets/dotalogo.png';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={dotalogo} alt="dota logo" />
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
