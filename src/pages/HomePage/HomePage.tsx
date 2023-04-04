import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import CardProps from '../../interfaces/ICard';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('Search Value') || '');
  const [response, setResponse] = useState(
    'https://rickandmortyapi.com/api/character' + '/?name=' + searchValue
  );
  const [arr, setArr] = useState<Array<CardProps>>([]);
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    const getArray = async () => {
      return axios
        .get(response)
        .then((result) => {
          setArr(result.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getArray();
    return () => {
      localStorage.setItem('Search Value', searchRef.current || '');
    };
  }, [response]);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  return (
    <div className="home">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setArr={setArr}
        response={response}
        setResponse={setResponse}
      />
      <div className="card__container" data-testid="card">
        {arr.map((item) => {
          return <Card key={item.id} id={item.id} image={item.image} name={item.name} arr={arr} />;
        })}
      </div>
    </div>
  );
};

export default Home;
