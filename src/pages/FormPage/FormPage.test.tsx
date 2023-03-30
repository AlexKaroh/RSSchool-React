import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from './FormPage';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomCardProps from '../../interfaces/ICustomCardProps';

describe('FormPage', () => {
  it('renders the form', () => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
      />
    );
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
    const cards = screen.getByTestId('cards');
    expect(cards).toBeInTheDocument();
  });

  it('render a list of custom cards', () => {
    const heroArr: CustomCardProps[] = [
      {
        id: 1,
        heroName: 'Axe',
        heroImage: 'Axe.jpg',
        heroAttribute: 'Strength',
        heroTypeAttack: 'Melee',
        heroRole: 'Carry',
        heroDate: '2222-22-22',
      },
    ];

    const { getByTestId } = render(
      <CustomCard
        key={heroArr[0].id}
        heroName={heroArr[0].heroName}
        heroImage={heroArr[0].heroImage}
        heroAttribute={heroArr[0].heroAttribute}
        heroTypeAttack={heroArr[0].heroTypeAttack}
        heroRole={heroArr[0].heroRole}
        heroDate={heroArr[0].heroDate}
      />
    );

    expect(getByTestId('hero-name')).toHaveTextContent(heroArr[0].heroName);
    expect(getByTestId('hero-img')).toHaveAttribute('src', heroArr[0].heroImage);
    expect(getByTestId('hero-role')).toHaveTextContent(heroArr[0].heroRole);
    expect(getByTestId('hero-date')).toHaveTextContent(heroArr[0].heroDate);
  });

  test('submits the form and adds a custom card', () => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
      />
    );

    const nameInput = screen.getByTestId('name_input');
    userEvent.type(nameInput, 'Axe');

    const attributeInput = screen.getByTestId('select');
    userEvent.selectOptions(attributeInput, ['Strength']);

    const dateInput = screen.getByTestId('date-button');
    fireEvent.change(dateInput, { target: { value: '2222-01-01' } });

    const imageInput = screen.getByTestId('image');
    const imageFile = new File(['Axe'], 'Axe.png', { type: 'image/png' });
    fireEvent.change(imageInput, { target: { files: [imageFile] } });

    const agreeInput = screen.getByTestId('agree');
    fireEvent.click(agreeInput);

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    const customCard = screen.getByTestId('cards');

    expect(customCard).toBeInTheDocument();
  });

  test('render typeAttackButton', () => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
      />
    );
    const typeAttackButton = screen.getByTestId('typeAttackButton');
    fireEvent.click(typeAttackButton);
    expect(typeAttackButton).toBeInTheDocument();
  });
  test('render radio buttons', () => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
      />
    );
    const carryRadio = screen.getByTestId('Carry') as HTMLElement;
    const midRadio = screen.getByTestId('Mid') as HTMLElement;
    const supportRadio = screen.getByTestId('Support') as HTMLElement;
    expect(carryRadio).toBeInTheDocument();
    expect(midRadio).toBeInTheDocument();
    expect(supportRadio).toBeInTheDocument();
  });

  test('show complete message', () => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
      />
    );
    expect(screen.queryByText('Your form has been submitted!')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('submit-button'));
    setTimeout(() => {
      expect(screen.queryByText('Your form has been submitted!')).not.toBeInTheDocument();
    }, 5000);
  });

  test('shoudn`t display an error message when date is valid', () => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
      />
    );
    const dateInput = screen.getByTestId('date-button');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(dateInput, { target: { value: '2025-03-24' } });
    fireEvent.click(submitButton);

    expect(screen.queryByText('Date field mustn`t be epmty')).not.toBeInTheDocument();
    expect(screen.queryByText('You must select the future date')).not.toBeInTheDocument();
  });
});
