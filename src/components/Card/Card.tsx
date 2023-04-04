/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './Card.css';
import CardProps from '../../interfaces/ICard';

const Card: React.FC<CardProps> = ({ id, image, name, arr }) => {
  const getArray = async (el: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const name = el.currentTarget.id;
    console.log(name);
    console.log(arr?.filter((el) => el.name === name));
  };
  return (
    <div className="card" id={name} key={id} onClick={(el) => getArray(el)}>
      <div className="card__image_container">
        <img className="card__image" src={image} alt="hero image" />
      </div>
      <div className="card__name">{name}</div>
    </div>
  );
};

export default Card;
