import React from 'react';
import { render } from '@testing-library/react';
import Home from './HomePage';
import { vi } from 'vitest';

vi.mock('axios');

describe('Home Component', () => {
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
