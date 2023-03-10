import React from 'react';
import './AboutUs.css';
import alexkaroh from '../../assets/alexkaroh.jpg';
import gitlogo from '../../assets/gitLogo.svg';
import tglogo from '../../assets/tgLogo.svg';
import linklogo from '../../assets/linkLogo.svg';
class AboutUs extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About me</h1>
        <div className="about__bio">
          <h3>
            Hello , my name is Alex and nowdays I`m study on React course by Rolling Scopes School
          </h3>
        </div>
        <img className="about__photo" src={alexkaroh} alt="author" />
        <div className="about__social">
          <a href="https://github.com/alexkaroh/">
            <img className="about__item" src={gitlogo} alt="git logo" />
          </a>
          <a href="https://linkedin.com/in/alexey-poklad-974735253/">
            <img className="about__item" src={linklogo} alt="linkedin logo" />
          </a>
          <a href="https://t.me/hloyahustle">
            <img className="about__tg about__item" src={tglogo} alt="telegram logo" />
          </a>
        </div>
      </div>
    );
  }
}
export default AboutUs;
