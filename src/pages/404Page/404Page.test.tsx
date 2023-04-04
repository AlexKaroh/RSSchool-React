import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './404Page';

describe('404 page', () => {
  test('render message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  test('render button', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Go Home');
  });

  test('render gif', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const gif = getByAltText('tinker gif') as HTMLImageElement;
    expect(gif).toBeInTheDocument();
    expect(gif.src).toContain('.gif');
  });

  test('render video', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const video = getByTestId('dota2-video') as HTMLVideoElement;
    expect(video).toBeInTheDocument();
    expect(video.src).toContain('.mp4');
  });
});
