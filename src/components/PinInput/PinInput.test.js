import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PinInput from './PinInput';

test('Input value should be *. But the last character should be a number', () => {
  const { getByRole } = render(<PinInput pin={'1111'} />);
  const inputElement = getByRole('code');
  userEvent.type('124');
  expect(inputElement).toHaveTextContent('**4');
});

test('When the input value length is 1, it value should be the number', () => {
  const { getByRole } = render(<PinInput pin={'1111'} />);
  const inputElement = getByRole('code');
  userEvent.type('1');
  expect(inputElement).toHaveTextContent('1');
});

test('When the input value is the right pin code display OK', () => {
  const { getByRole } = render(<PinInput pin={'1111'} />);
  const inputElement = getByRole('code');
  userEvent.type('1111');
  expect(inputElement).toHaveTextContent('OK');
});

test('When the input value is the wrong pin code display ERROR', () => {
  const mockFunc = jest.fn();
  const { getByRole } = render(<PinInput pin={'1111'} onResetPin={mockFunc} />);
  const inputElement = getByRole('code');
  userEvent.type('2222');
  expect(inputElement).toHaveTextContent('ERROR');
  expect(mockFunc).toHaveBeenCalledTimes(1);
});

// test('When the pin code is wrong 3 times display LOCKED', () => {
//   const mockFunc = jest.fn();
//   const { getByRole } = render(<PinInput pin={'1111'} onResetPin={mockFunc} />);
//   const inputElement = getByRole('code');
//   userEvent.type('2222');
//   userEvent.type('3333');
//   userEvent.type('4444');
//   expect(inputElement).toHaveTextContent('LOCKED');
//   expect(mockFunc).toHaveBeenCalledTimes(1);
// });
