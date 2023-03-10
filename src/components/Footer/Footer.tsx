import './Footer.css';
import React from 'react';
import rsslogo from '../../assets/rssLogo.svg';
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="footer__copyright">© 2023, All Rights Reserved</span>
        <a href="/">
          <img className="footer__school_logo" src={rsslogo} alt="rss logo" />
        </a>
      </footer>
    );
  }
}

export default Footer;
