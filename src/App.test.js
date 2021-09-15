import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('Header', () => {
  test('"how it works" link should point to the corrct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const howLink = screen.getByRole('link', { name: /how it works/i });
    // screen.debug(howLink);
    userEvent.click(howLink);

    expect(
      screen.getByRole('heading', { name: /how it works/i }),
    ).toBeInTheDocument();
  });

  test('"about" link should point to the corrct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    // screen.debug(aboutLink);

    expect(
      screen.getByRole('heading', { name: /welcome to/i }),
    ).toBeInTheDocument();
  });

  test('"Logo" link should point to the / home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const logoLink = screen.getByRole('link', { name: /reddit logo/i });
    userEvent.click(logoLink);
    // screen.debug(logoLink);

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('posts should resolve and render on the page', () => {
  test('load results and render them', () => {
    setup();
    const subInput = screen.getByLabelText(/r/i);
    userEvent.type(subInput, 'reactjs');
    expect(subInput).toHaveValue('reactjs');
    screen.debug(subInput);

    // const submitBtn = screen.getByRole('button', { name: /search/i });
    // userEvent.click(submitBtn);
    // expect(screen.getByText(/pl/i)).toBeInTheDocument();
    // screen.debug();
  });
});
