import React from 'react';
import './HomePage.css';
import heroes from '../../heroes.json';
import searchImg from '../../assets/search.svg';
import Card from '../../components/Card/Card';

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
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                attackType={item.attack_type}
                primaryAttr={item.primary_attr}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
