import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { PinInput } from '../components';

export default {
  title: 'PinInput',
  decorators: [withKnobs],
};

export const defaultState = () => {
  const inputCode = text('InputCode', '');

  return <PinInput formState={'notFullFilled'} userInputCode={inputCode} />;
};

export const success = () => {
  const inputCode = text('InputCode', '1111');

  return <PinInput formState={'success'} userInputCode={inputCode} />;
};

export const error = () => {
  const inputCode = text('InputCode', '1112');

  return <PinInput formState={'error'} userInputCode={inputCode} />;
};

export const locked = () => {
  const inputCode = text('InputCode', '1112');

  return <PinInput formState={'locked'} userInputCode={inputCode} />;
};
