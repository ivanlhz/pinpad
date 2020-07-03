import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShowPin from './ShowPin';

test('Display show pin and hide pin when the checkbox is clicked', () => {
  const { getByLabelText, getByText } = render(<ShowPin pin={'1234'} />);
  const checkbox = getByLabelText(/show pin/i);
  expect(checkbox).toBeInTheDocument();
  userEvent.click(checkbox);
  expect(getByLabelText(/hide/i)).toBeInTheDocument();
  expect(getByText(/1234/)).toBeInTheDocument();
});
