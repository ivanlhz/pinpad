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

export const withStyle = () => {
  const pin = text('Pin', '1234');
  const style = object('Style', {
    color: 'orange',
    borderLeft: '2px solid orange',
  });
  return <ShowPin pin={pin} initialState={true} style={style} />;
};
