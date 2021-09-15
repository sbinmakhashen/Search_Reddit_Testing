import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from './App';
import { SubredditContextProvider } from './Context/SubredditContext';
import responseTesting from './mocks/responseTesting.json';

describe('Header', () => {
  test('"how it works" link should point to the corrct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const howLink = screen.getByRole('link', { name: /how it works/i });
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

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});

function setup() {
  return render(
    <SubredditContextProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </SubredditContextProvider>,
  );
}
describe('subreddit form', () => {
  test('posts should resolve and render on the page', async () => {
    fetch.mockResponseOnce(JSON.stringify(responseTesting));
    setup();
    const subInput = screen.getByLabelText(/r/i);
    userEvent.type(subInput, 'reactjs');
    expect(subInput).toHaveValue('reactjs');

    const submitBtn = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitBtn);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    // const apiResults = await waitFor(() => screen.findByText(/number/i), {
    //   timeout: 8000,
    // });
    // expect(await screen.findByText(/number/i)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith(
      'https://www.reddit.com/r/reactjs/top.json',
    );
    screen.debug();
  });
});

describe('error message', () => {
  test('error message displays when a user submits without entering in input', async () => {
    fetch.once(JSON.stringify(responseTesting));
    setup();
    const subInput = screen.getByLabelText(/r/i);
    userEvent.type(subInput, null);

    const submitBtn = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitBtn);
    const errMessage = screen.getByText(/please/i);
    expect(errMessage).toBeInTheDocument();
  });
});
