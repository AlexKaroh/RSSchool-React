import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomCard from './CustomCard';

describe('CustomCard', () => {
  const props = {
    heroName: 'Viper',
    heroImage: 'https://viper.com/viper.jpg',
    heroRole: 'Carry',
    heroDate: '2222-22-22',
    heroAttribute: 'Agility',
    heroTypeAttack: true,
  };

  it('render hero name', () => {
    render(<CustomCard {...props} />);
    const heroNameElement = screen.getByText(props.heroName);
    expect(heroNameElement).toBeInTheDocument();
  });

  it('render hero image', () => {
    render(<CustomCard {...props} />);
    const heroImageElement = screen.getByAltText('hero image') as HTMLImageElement;
    expect(heroImageElement.src).toBe(props.heroImage);
  });

  it('render hero attribute', () => {
    render(<CustomCard {...props} />);
    const heroAttributeImageElement = screen.getByAltText('hero_attribute') as HTMLImageElement;
    expect(heroAttributeImageElement.src).toBe(
      'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
    );
  });

  it('return attribute Agility', () => {
    render(<CustomCard {...props} />);
    const attributeImage = screen.getByAltText('hero_attribute') as HTMLImageElement;
    expect(attributeImage.src).toContain('hero_agility.png');
  });

  it('return attribute Strength', () => {
    render(<CustomCard {...props} heroAttribute="Strength" />);
    const attributeImage = screen.getByAltText('hero_attribute') as HTMLImageElement;
    expect(attributeImage.src).toContain('hero_strength.png');
  });

  it('return attribute Intelligence', () => {
    render(<CustomCard {...props} heroAttribute="Intelligence" />);
    const attributeImage = screen.getByAltText('hero_attribute') as HTMLImageElement;
    expect(attributeImage.src).toContain('hero_intelligence.png');
  });

  it('render type attack', () => {
    render(<CustomCard {...props} />);
    const heroAttackElement = screen.getByText('Ranged');
    expect(heroAttackElement).toBeInTheDocument();
  });

  it('render hero role', () => {
    render(<CustomCard {...props} />);
    const heroRoleElement = screen.getByText(props.heroRole);
    expect(heroRoleElement).toBeInTheDocument();
  });

  it('render release date', () => {
    render(<CustomCard {...props} />);
    const heroDateElement = screen.getByText(`Release date: ${props.heroDate}`);
    expect(heroDateElement).toBeInTheDocument();
  });
});
