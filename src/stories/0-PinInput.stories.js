import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { PinInput } from '../components';

export default {
  title: 'PinInput',
  decorators: [withKnobs],
};

export const defaultState = () => {
  const pin = text('Pin', '1111');
  const inputCode = text('InputCode', '');

  return <PinInput pin={pin} code={inputCode} />;
};

export const success = () => {
  const pin = text('Pin', '1111');
  const inputCode = text('InputCode', '1111');

  return <PinInput pin={pin} code={inputCode} />;
};
export const error = () => {
  const pin = text('Pin', '1111');
  const inputCode = text('InputCode', '1112');

  return <PinInput pin={pin} code={inputCode} />;
};
