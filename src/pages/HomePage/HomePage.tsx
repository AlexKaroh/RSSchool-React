import React from 'react';
import './HomePage.css';
import heroes from '../../heroes.json';
import searchImg from '../../assets/search.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="search_container">
          <form className="seacrh__form" role="search">
            <input className="seacrh__bar" type="text" />
            <button className="search__submit">
              <img className="search__img" src={searchImg} alt="search img" />
            </button>
          </form>
        </div>
        <div className="card__container">
          {heroes.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card__image_container">
                  <img className="card__image" src={item.image} alt="hero image" />
                </div>
                <div className="card__name">{item.name}</div>
                <div className="card__info">
                  <div className="card__attack">{item.attack_type}</div>
                  <div className="card__attribute_container">
                    <img className="card__attribute" src={item.primary_attr} alt="hero attribute" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
