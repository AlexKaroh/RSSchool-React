import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('render link to Dota 2 and rss logo image', () => {
    render(<Footer />);
    const image = screen.getByAltText('rss logo');
    //RSSchool logo
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('rssLogo.svg'));
  });
});
