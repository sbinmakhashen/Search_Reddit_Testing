import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('Header', () => {
  describe('"How it works" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
});
