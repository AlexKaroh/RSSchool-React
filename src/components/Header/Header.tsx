import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';
import reactlogo from '../../assets/reactLogo.svg';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={reactlogo} alt="" />
        <Nav />
      </header>
    );
  }
}

export default Header;
