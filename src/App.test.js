import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Get the title element', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/unlock with your pin code/i);
  expect(titleElement).toBeInTheDocument();
});
