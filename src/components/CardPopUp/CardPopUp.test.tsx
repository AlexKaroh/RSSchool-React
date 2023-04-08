import React from 'react';
import { render } from '@testing-library/react';
import CardPopUp from './CardPopUp';
import CardProps from 'interfaces/ICard';

describe('render modal component', () => {
  const activeCardData: CardProps[] = [
    {
      image: '',
      name: '',
      gender: '',
      species: '',
      location: { name: 'string', url: 'string' },
      status: '',
      type: '',
      episode: ['', ''],
    },
  ];
  test('render modal component', () => {
    const { getByTestId } = render(
      <CardPopUp
        activeCardData={activeCardData}
        modalActive={true}
        setModalActive={function (): void {}}
      />
    );
    expect(getByTestId('modal')).toBeInTheDocument();
  });
});
