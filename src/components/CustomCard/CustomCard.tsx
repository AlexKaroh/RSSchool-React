import './CustomCard.css';
import ICustomCardProps from '../../interfaces/ICustomCardProps';
import React from 'react';

const CustomCard: React.FC<ICustomCardProps> = ({
  heroName,
  heroImage,
  heroRole,
  heroDate,
  heroAttribute,
  heroTypeAttack,
}) => {
  const createHeroAttribute = () => {
    switch (heroAttribute) {
      case 'Agility':
        return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png';
      case 'Strength':
        return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png';
      case 'Intelligence':
        return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png';
      default:
        return '';
    }
  };

  const createHeroTypeAttack = () => {
    switch (heroTypeAttack) {
      case false:
        return 'Melee';
      case true:
        return 'Ranged';
      default:
        return '';
    }
  };

  return (
    <div className="card">
      <div className="card__image_container">
        <img src={heroImage} className="card__image" alt="hero image" />
      </div>
      <div className="card__hero_name">{heroName}</div>
      <div className="card__image_header">
        <div className="card__hero_attack">{createHeroTypeAttack()}</div>
        <img
          src={createHeroAttribute()}
          className="card__hero_attribute_image"
          alt="hero_attribute"
        />
        <div className="card__hero_role">{heroRole}</div>
      </div>
      <div className="card__hero_date">Release date: {heroDate}</div>
    </div>
  );
};

export default CustomCard;
