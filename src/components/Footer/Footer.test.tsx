import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('render link to Dota 2 and rss logo image', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /dota 2/i });
    const image = screen.getByAltText('rss logo');
    //Link
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.dota2.com/');
    //RSSchool logo
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('rssLogo.svg'));
  });
});
