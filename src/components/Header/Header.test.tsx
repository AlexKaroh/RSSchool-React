import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('render React logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByAltText('dota logo')).toBeInTheDocument();
  });

  it('render home page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    const pageTitle = getByText('Home');
    expect(pageTitle).toBeInTheDocument();
  });

  it('render header', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/heroes']}>
        <Header />
        <Routes>
          <Route path="/heroes"></Route>
        </Routes>
      </MemoryRouter>
    );

    const pageTitle = getByText('Create Hero');
    expect(pageTitle).toBeInTheDocument();
  });
});
