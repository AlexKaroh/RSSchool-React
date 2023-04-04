import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import CardProps from '../../interfaces/ICard';
import CardPopUp from '../../components/CardPopUp/CardPopUp';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('Search Value') || '');
  const [activeCardData, setActiveCardData] = useState<Array<CardProps>>([
    { name: 'Rick', id: '1' },
  ]);
  const [response, setResponse] = useState(
    'https://rickandmortyapi.com/api/character' + '/?name=' + searchValue
  );
  const [arr, setArr] = useState<Array<CardProps>>([]);
  const [modalActive, setModalActive] = useState(false);
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
          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              arr={arr}
              setModalActive={setModalActive}
              activeCardData={activeCardData}
              setActiveCardData={setActiveCardData}
            />
          );
        })}
      </div>
      <CardPopUp
        modalActive={modalActive}
        setModalActive={setModalActive}
        activeCardData={activeCardData}
      />
    </div>
  );
};

export default Home;
