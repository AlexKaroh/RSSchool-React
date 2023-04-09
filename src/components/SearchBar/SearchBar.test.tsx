import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('should render input and button', () => {
    render(
      <SearchBar
        searchValue=""
        response={''}
        setArr={function (): void {}}
        setSearchValue={function (): void {}}
        setResponse={function (): void {}}
      />
    );
    expect(screen.getByTestId('search_input')).toBeInTheDocument();
    expect(screen.getByAltText('search img')).toBeInTheDocument();
  });
});
