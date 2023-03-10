import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Nav />
      </header>
    );
  }
}

export default Header;
