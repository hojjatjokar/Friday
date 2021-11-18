import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const mockedData = {
  makes: [],
  models: [],
  vehicles: [],
};

describe('App component', () => {
  global.fetch = jest.fn(() => Promise.resolve(mockedData.makes));

  test('it renders', () => {
    render(<App />);
  });
});
