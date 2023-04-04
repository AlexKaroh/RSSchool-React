import './SearchBar.css';
import ISearchBarProps from '../../interfaces/ISearchBar';
import searchImg from '../../assets/search.svg';
import React from 'react';

const SearchBar: React.FC<ISearchBarProps> = ({ searchValue, setSearchValue, setResponse }) => {
  const handleChange = (e: string) => {
    setSearchValue(e);
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setResponse('https://rickandmortyapi.com/api/character' + '/?name=' + searchValue);
    }
  };

  return (
    <div className="seacrh__form">
      <input
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleClick(e)}
        data-testid="search_input"
        className="seacrh__bar"
        type="text"
      />
      <button className="search__submit">
        <img className="search__img" src={searchImg} alt="search img" />
      </button>
    </div>
  );
};

export default SearchBar;
