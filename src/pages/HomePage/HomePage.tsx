/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import CardProps from '../../interfaces/ICard';

const Home = () => {
  const [response, setResponse] = useState('https://rickandmortyapi.com/api/character');
  const [searchValue, setSearchValue] = useState(localStorage.getItem('Search Value') || '');
  const [arr, setArr] = useState<Array<CardProps>>([]);
  const [filteredArr, setFilteredArr] = useState<Array<CardProps>>(arr);
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    async function getArray() {
      try {
        const result = await axios.get(response);
        setArr(result.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getArray();
    return () => {
      localStorage.setItem('Search Value', searchRef.current || '');
    };
  }, [filteredArr, response]);

  useEffect(() => {
    const filteredArr = arr.filter((el) =>
      el.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    searchRef.current = searchValue;
    setFilteredArr(filteredArr);
  }, [arr, searchValue]);

  return (
    <div className="home">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="card__container" data-testid="card">
        {filteredArr.map((item) => {
          return <Card key={item.id} id={item.id} image={item.image} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Home;
