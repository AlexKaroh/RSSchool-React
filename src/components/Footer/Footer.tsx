import './Footer.css';
import React from 'react';
import rsslogo from '../../assets/rssLogo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__author"></div>
      <span className="footer__copyright">
        Images & Video by{' '}
        <a className="footer__ref" href="https://www.dota2.com/">
          Dota 2
        </a>
      </span>
      <a href="https://rs.school/">
        <img className="footer__school_logo" src={rsslogo} alt="rss logo" />
      </a>
    </footer>
  );
};

export default Footer;
