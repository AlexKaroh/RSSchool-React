import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  const props = {
    id: 1,
    image: 'https://imageurl.com',
    name: 'Test Hero',
    attackType: 'Melee',
    primaryAttr: 'https://attributeurl.com',
  };

  test('renders card information correctly', () => {
    const { getByAltText, getByText } = render(<Card {...props} />);

    expect(getByAltText('hero image')).toBeInTheDocument();
    expect(getByAltText('hero image')).toHaveAttribute('src', props.image);
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.attackType)).toBeInTheDocument();
    expect(getByAltText('hero attribute')).toBeInTheDocument();
    expect(getByAltText('hero attribute')).toHaveAttribute('src', props.primaryAttr);
  });
});
