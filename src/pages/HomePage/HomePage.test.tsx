import React from 'react';
import { render } from '@testing-library/react';
import Home from './HomePage';

describe('Home Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('render search button', () => {
    const { getByAltText } = render(<Home />);
    const searchButton = getByAltText('search img');
    expect(searchButton).toBeInTheDocument();
  });

  test('render search input', () => {
    const { getByRole } = render(<Home />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
