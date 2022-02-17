import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App } from './core/App';
import store from './core/store';

test('renders texts', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const nameElement = screen.getByText(/wojciech bylica/i);
  expect(nameElement).toBeInTheDocument();
  const skillElement = screen.getByText(/What I want to learn next/i);
  expect(skillElement).toBeInTheDocument();
});
