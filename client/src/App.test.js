import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("All Slots>")
  expect(linkElement).toBeInTheDocument();
});
