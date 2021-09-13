import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('Header', () => {
  test('"How it works" link it should point to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    screen.debug();
  });
});
