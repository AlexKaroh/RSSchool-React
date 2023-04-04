import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import CardProps from '../../interfaces/ICard';
import CardPopUp from '../../components/CardPopUp/CardPopUp';
import Loader from '../../components/Loader/Loader';

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
  const [isLoad, setIsLoad] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  const [unfoundWord, setUnfoundWord] = useState('');
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    setIsLoad(true);
    const getArray = async () => {
      return axios
        .get(response)
        .then((result) => {
          setIsFailed(false);
          setIsLoad(false);
          setArr(result.data.results);
        })
        .catch(() => {
          setUnfoundWord(searchValue);
          setIsLoad(false);
          setIsFailed(true);
        });
    };
    setTimeout(() => {
      getArray();
    }, 1000);
    return () => {
      localStorage.setItem('Search Value', searchRef.current || '');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {isLoad ? (
        <Loader />
      ) : (
        (!isFailed && (
          <>
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
          </>
        )) || <h1>Request &quot;{unfoundWord}&quot; isn&#39;t found in API</h1>
      )}
    </div>
  );
};

export default Home;
