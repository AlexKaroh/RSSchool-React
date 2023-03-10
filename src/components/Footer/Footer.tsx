import './Footer.css';
import React from 'react';
import rsslogo from '../../assets/rssLogo.svg';
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__author">Created by AlexKaroh</div>
        <span className="footer__copyright">© 2023, All Rights Reserved</span>
        <a href="https://rs.school/">
          <img className="footer__school_logo" src={rsslogo} alt="rss logo" />
        </a>
      </footer>
    );
  }
}

export default Footer;
