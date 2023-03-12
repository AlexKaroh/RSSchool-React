import './Footer.css';
import React from 'react';
import rsslogo from '../../assets/rssLogo.svg';
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__author"></div>
        <span className="footer__copyright">
          Design & Assets by{' '}
          <a className="footer__ref" href="https://www.dota2.com/">
            Dota 2
          </a>
        </span>
        <a href="https://rs.school/">
          <img className="footer__school_logo" src={rsslogo} alt="rss logo" />
        </a>
      </footer>
    );
  }
}

export default Footer;
