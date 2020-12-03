import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders My Projects', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My Projects/i);
  expect(linkElement).toBeInTheDocument();
});
