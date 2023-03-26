import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  beforeEach(() => {
    render(
      <FormPage
        typeAttack={false}
        agree={undefined}
        imageUrl={undefined}
        role={undefined}
        customHeroesArr={[]}
        nameFromDirty={false}
        nameFromEmpty={false}
        attributeFromDirty={false}
        roleFormDirty={false}
        dateFormDirty={false}
        dateFormEmpty={false}
        imageFormDirty={false}
        acceptFormDirty={undefined}
        showForm={false}
      />
    );
  });

  it('renders the form', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
