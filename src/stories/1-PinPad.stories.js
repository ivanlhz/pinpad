import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PinPad } from '../components';

export default {
  title: 'PinPad',
  decorators: [withKnobs],
};

export const defaultState = () => {
  return <PinPad />;
};

export const disabled = () => {
  const disabled = boolean('Disabled', true);
  return <PinPad disabled={disabled} />;
};

export const clickEvent = () => {
  const disabled = boolean('Disabled', false);

  return <PinPad disabled={disabled} onNumberPress={action('pinPad-click')} />;
};
