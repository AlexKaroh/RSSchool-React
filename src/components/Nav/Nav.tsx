import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
