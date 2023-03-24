import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';
import React from 'react';

describe('AboutUs component', () => {
  test('render header', () => {
    render(<AboutUs />);
    const header = screen.getByRole('heading', { name: /about me/i });
    expect(header).toBeInTheDocument();
  });

  test('render photo', () => {
    render(<AboutUs />);
    const photo = screen.getByAltText('author') as HTMLImageElement;
    expect(photo).toBeInTheDocument();
    expect(photo.src).toContain('alexkaroh.jpg');
  });

  test('render bio', () => {
    render(<AboutUs />);
    const bio = screen.getByRole('heading', { name: /hello/i });
    expect(bio).toBeInTheDocument();
  });

  test('render GitHub link', () => {
    render(<AboutUs />);
    const gitLink = screen.getByRole('link', { name: /git logo/i }) as HTMLAnchorElement;
    expect(gitLink).toBeInTheDocument();
    expect(gitLink.href).toBe('https://github.com/alexkaroh/');
  });

  test('render LinkedIn link', () => {
    render(<AboutUs />);
    const linkLink = screen.getByRole('link', { name: /linkedin logo/i }) as HTMLAnchorElement;
    expect(linkLink).toBeInTheDocument();
    expect(linkLink.href).toBe('https://linkedin.com/in/alexey-poklad-974735253/');
  });

  test('render Telegram link', () => {
    render(<AboutUs />);
    const tgLink = screen.getByRole('link', { name: /telegram logo/i }) as HTMLAnchorElement;
    expect(tgLink).toBeInTheDocument();
    expect(tgLink.href).toBe('https://t.me/hloyahustle');
  });
});
