import React from 'react';
import './HomePage.css';
import heroes from '../../heroes.json';
import searchImg from '../../assets/search.svg';

class Home extends React.Component {
  state = {
    searchValue: '',
    filteredArr: heroes,
  };

  static getDerivedStateFromProps(props: object, state: { searchValue: string }) {
    const storedValue = localStorage.getItem('Search Value');
    const searchValue = storedValue || state.searchValue;
    const filteredArr = heroes.filter((el) =>
      el.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return { searchValue, filteredArr };
  }

  handleChange = (searchValue: string) => {
    if (searchValue === '') {
      localStorage.removeItem('Search Value');
    } else {
      localStorage.setItem('Search Value', searchValue);
    }
    this.setState({ searchValue });
  };

  render() {
    return (
      <div className="home">
        <div className="search_container">
          <div className="seacrh__form">
            <input
              value={this.state.searchValue}
              onChange={(e) => this.handleChange(e.target.value)}
              className="seacrh__bar"
              type="text"
            />
            <button className="search__submit">
              <img className="search__img" src={searchImg} alt="search img" />
            </button>
          </div>
        </div>
        <div className="card__container">
          {this.state.filteredArr.map((item) => {
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
