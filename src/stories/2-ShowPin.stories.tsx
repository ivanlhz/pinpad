import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { ShowPin } from '../components';

export default {
  title: 'ShowPin',
  decorators: [withKnobs],
};

export const defaultState = () => {
  const pin = text('Pin', '1234');
  return <ShowPin pin={pin} />;
};

export const show = () => {
  const pin = text('Pin', '1234');
  return <ShowPin pin={pin} initialState={true} />;
};

