import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/">
              Home Page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/AboutUs">
              About Us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/Form">
              Create Card
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
