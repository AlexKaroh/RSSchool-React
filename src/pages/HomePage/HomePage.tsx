import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import heroes from '../../heroes.json';
import searchImg from '../../assets/search.svg';
import Card from '../../components/Card/Card';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('Search Value') || '');
  const [filteredArr, setFilteredArr] = useState(heroes);
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    return () => {
      localStorage.setItem('Search Value', searchRef.current || '');
    };
  }, []);

  useEffect(() => {
    const filteredArr = heroes.filter((el) =>
      el.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    searchRef.current = searchValue;
    setFilteredArr(filteredArr);
  }, [searchValue]);

  const handleChange = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="home">
      <div className="search_container">
        <div className="seacrh__form">
          <input
            value={searchValue}
            data-testid="search_input"
            onChange={(e) => handleChange(e.target.value)}
            className="seacrh__bar"
            type="text"
          />
          <button className="search__submit">
            <img className="search__img" src={searchImg} alt="search img" />
          </button>
        </div>
      </div>
      <div className="card__container" data-testid="card">
        {filteredArr.map((item) => {
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
};

export default Home;
