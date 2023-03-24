import React from 'react';
import './Card.css';
import ICard from '../../interfaces/ICard';

class Card extends React.Component<ICard> {
  render() {
    const { id, image, name, attackType, primaryAttr } = this.props;
    return (
      <div className="card" key={id}>
        <div className="card__image_container">
          <img className="card__image" src={image} alt="hero image" />
        </div>
        <div className="card__name">{name}</div>
        <div className="card__info">
          <div className="card__attack">{attackType}</div>
          <div className="card__attribute_container">
            <img className="card__attribute" src={primaryAttr} alt="hero attribute" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
