import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
  test('renders HomePage and AboutUs links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});
