import './SearchBar.css';
import ISearchBarProps from '../../interfaces/ISearchBar';
import searchImg from '../../assets/search.svg';
import React from 'react';

const SearchBar: React.FC<ISearchBarProps> = ({ searchValue, setSearchValue }) => {
  const handleChange = (searchValue: string) => {
    setSearchValue(searchValue);
  };
  return (
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
  );
};

export default SearchBar;
