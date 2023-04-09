import React from 'react';
import { render } from '@testing-library/react';
import PopUp from './PopUp';

describe('PopUp', () => {
  it('render popup', () => {
    const { getByText } = render(<PopUp />);
    const confirmationMessage = getByText('Confirmed! the data has been saved.');
    expect(confirmationMessage).toBeInTheDocument();
    expect(confirmationMessage).toHaveClass('green');
  });
});
