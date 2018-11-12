import React from 'react';
import ReactDOM from 'react-dom';
import ThumbnailMenu from './index';

const fakeState = {
  gists: [
    {
      description: "wu",
      filename: "tang",
      textarea: "clan",
    },
    {
      description: "mary",
      filename: "tyler",
      textarea: "moore",
    },
  ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThumbnailMenu { ...fakeState }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
