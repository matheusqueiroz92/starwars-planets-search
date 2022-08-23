import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testando o componente table')
test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nome/i);
  expect(linkElement).toBeInTheDocument();
});
