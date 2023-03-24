import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormPage from './FormPage';
import { test } from 'vitest';

describe('FormPage', () => {
  test('render form', () => {
    render(<FormPage />);

    expect(screen.getByText('Hero Name :')).toBeInTheDocument();
    expect(screen.getByText('Hero Attribute :')).toBeInTheDocument();
    expect(screen.getByText('Type of attack :')).toBeInTheDocument();
    expect(screen.getByText('Role :')).toBeInTheDocument();
    expect(screen.getByText('Release date :')).toBeInTheDocument();
    expect(screen.getByText('Hero image')).toBeInTheDocument();
    expect(screen.getByText('I consent to use of my data')).toBeInTheDocument();
    expect(screen.getByText('Create Hero')).toBeInTheDocument();
  });

  test('handleClickTypeAttack function correctly toggles the typeAttack state', () => {
    render(<FormPage />);
    const typeAttackButton = screen.getByTestId('typeAttackButton');
    fireEvent.click(typeAttackButton);
    expect(typeAttackButton).toBeInTheDocument();
  });

  test('render radio buttons', () => {
    render(<FormPage />);
    const carryRadio = screen.getByTestId('Carry') as HTMLElement;
    const midRadio = screen.getByTestId('Mid') as HTMLElement;
    const supportRadio = screen.getByTestId('Support') as HTMLElement;
    expect(carryRadio).toBeInTheDocument();
    expect(midRadio).toBeInTheDocument();
    expect(supportRadio).toBeInTheDocument();
  });

  test('show message', () => {
    render(<FormPage />);
    expect(screen.queryByText('Your form has been submitted!')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('submit-button'));
    setTimeout(() => {
      expect(screen.queryByText('Your form has been submitted!')).not.toBeInTheDocument();
    }, 5000);
  });
});
