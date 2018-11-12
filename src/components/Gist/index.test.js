import React from 'react';
import ReactDOM from 'react-dom';
import Gist from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gist />, div);
  ReactDOM.unmountComponentAtNode(div);
});
