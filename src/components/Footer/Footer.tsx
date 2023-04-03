import './Footer.css';
import React from 'react';
import rsslogo from '../../assets/rssLogo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__author"></div>
      <span className="footer__copyright">
        <a className="footer__ref" href="https://www.dota2.com/">
        </a>
        April 2023
      </span>
      <a href="https://rs.school/">
        <img className="footer__school_logo" src={rsslogo} alt="rss logo" />
      </a>
    </footer>
  );
};

export default Footer;
