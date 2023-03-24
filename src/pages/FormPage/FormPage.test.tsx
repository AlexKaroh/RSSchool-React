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

  test('render typeAttackButton', () => {
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

  test('show complete message', () => {
    render(<FormPage />);
    expect(screen.queryByText('Your form has been submitted!')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('submit-button'));
    setTimeout(() => {
      expect(screen.queryByText('Your form has been submitted!')).not.toBeInTheDocument();
    }, 5000);
  });

  test('display error message when date is empty', () => {
    render(<FormPage />);
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByText('Date field mustn`t be epmty')).toBeInTheDocument();
  });

  test('shoudn`t display an error message when date is valid', () => {
    render(<FormPage />);
    const dateInput = screen.getByTestId('date-button');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(dateInput, { target: { value: '2025-03-24' } });
    fireEvent.click(submitButton);

    expect(screen.queryByText('Date field mustn`t be epmty')).not.toBeInTheDocument();
    expect(screen.queryByText('You must select the future date')).not.toBeInTheDocument();
  });

  test('nameValidation', () => {
    render(<FormPage />);
    const nameInput = screen.getByTestId('name_input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(nameInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText('Field mustn`t contain numbers, symbols and start with a capital letter')
    ).toBeInTheDocument();
  });
});
