import React from 'react';
import { render } from '@testing-library/react';
import PinInput from './PinInput';

test('When the input value length is 1, it value should be the number', () => {
  const { getByText } = render(<PinInput pin={'1111'} userInputCode={'1'} />);
  expect(getByText('1')).toBeInTheDocument();
});

test('Input value should be *. But the last character should be a number', () => {
  const { getByText } = render(<PinInput pin={'1111'} userInputCode={'124'} />);
  const inputElement = getByText(/\*\*/i);
  const span = getByText(/4/i);
  expect(inputElement).toBeInTheDocument();
  expect(span).toBeInTheDocument();
});

test('When the input value is the right pin code display OK', () => {
  const { getByText } = render(<PinInput pin={'1111'} userInputCode={'1111'} />);
  const inputElement = getByText(/ok/i);
  expect(inputElement).toBeInTheDocument();
});

test('When the input value is the wrong pin code display ERROR', () => {
  const { getByText } = render(<PinInput pin={'1111'} userInputCode={'1234'} />);
  const inputElement = getByText(/error/i);
  expect(inputElement).toBeInTheDocument();
});

