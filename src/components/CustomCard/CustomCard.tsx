import './CustomCard.css';
import ICustomCardProps from '../../interfaces/ICustomCardProps';
import React from 'react';

class CustomCard extends React.Component<ICustomCardProps> {
  createHeroAttribute = () => {
    switch (this.props.heroAttribute) {
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

  createHeroTypeAttack = () => {
    switch (this.props.heroTypeAttack) {
      case false:
        return 'Melee';
      case true:
        return 'Ranged';
      default:
        return '';
    }
  };

  render() {
    const { heroName, heroImage, heroRole, heroDate } = this.props;
    return (
      <div className="card">
        <div className="card__image_container">
          <img src={heroImage} className="card__image" alt="hero image" />
        </div>
        <div className="card__hero_name">{heroName}</div>
        <div className="card__image_header">
          <div className="card__hero_attack">{this.createHeroTypeAttack()}</div>
          <img
            src={this.createHeroAttribute()}
            className="card__hero_attribute_image"
            alt="hero_attribute"
          />
          <div className="card__hero_role">{heroRole}</div>
        </div>
        <div className="card__hero_date">Hero Created: {heroDate}</div>
      </div>
    );
  }
}

export default CustomCard;
