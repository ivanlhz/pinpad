import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PinPad from './PinPad';

test('All numbers should be visible', () => {
  const { getByText } = render(<PinPad />);
  for (let i = 0; i < 10; i++) {
    const numberElement = getByText(i.toString());
    expect(numberElement).toBeInTheDocument();
  }
});

test('On number press it should call the onNumbrePress method', () => {
  const mockFunction = jest.fn();
  const { getByText } = render(<PinPad onNumberPress={mockFunction} />);
  const numberElement = getByText(/3/i);
  userEvent.click(numberElement);
  expect(mockFunction.mock.calls.length).toBe(1);
  expect(mockFunction.mock.calls[0][0]).toBe(3);
});
