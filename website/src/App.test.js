import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  const main_tree = renderer.create(<App/>).toJSON();
  expect(main_tree).toMatchSnapshot();
});