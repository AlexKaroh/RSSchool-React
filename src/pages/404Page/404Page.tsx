import React from 'react';
import './404Page.css';
import tinerGif from '../../assets/tinker.gif';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className="Page404">
        <div className="video__container">
          <video autoPlay muted preload="auto" loop className="video">
            <source
              type="video/mp4"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
            />
          </video>
          <div className="video__info">
            <h1 className="video__header_text">404</h1>
            <h2 className="video__text">Page not found</h2>
            <img className="video__image" src={tinerGif} alt="" />
            <Link className="video__link" to="/">
              <button className="video__button">Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
