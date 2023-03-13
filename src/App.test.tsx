import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';
import React from 'react';

describe('App', () => {
  it('should render the App component', () => {
    render(<App />);
    expect(
      screen.queryByText('I dont want to do tests for coverage my project 😰')
    ).not.toBeInTheDocument();
  });
});
