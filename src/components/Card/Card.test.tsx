import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  const mockCardData = {};
  it('should render correctly', () => {
    const { getByTestId, getByAltText } = render(<Card {...mockCardData} />);
    expect(getByTestId('card_container')).toBeInTheDocument();
    expect(getByAltText('hero image')).toBeInTheDocument();
  });
});
