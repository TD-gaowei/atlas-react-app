import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

jest.mock('./hooks', () => ({
  useCurrentUser: () => ({
    name: 'John Doe',
    email: 'john.doe@talkdesk.com',
  }),
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
