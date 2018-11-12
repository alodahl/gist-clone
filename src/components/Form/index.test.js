import React from 'react';
import ReactDOM from 'react-dom';
import Form from './index';

const fakeProps =  {
          description: "mary",
          filename: "tyler",
          textarea: "moore",
        };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form { ...fakeProps }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
