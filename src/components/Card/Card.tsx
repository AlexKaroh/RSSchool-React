import React from 'react';
import './Card.css';
import CardProps from '../../interfaces/ICard';

const Card: React.FC<CardProps> = ({ id, image, name }) => {
  return (
    <div className="card" key={id}>
      <div className="card__image_container">
        <img className="card__image" src={image} alt="hero image" />
      </div>
      <div className="card__name">{name}</div>
    </div>
  );
};

export default Card;
