import React from 'react';
import ReactDOM from 'react-dom';
import ThumbnailMenu from './index';
import "../../../jest.setup.js"
import { shallow, mount, render } from 'enzyme';

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

it("Renders the array of thumbnails", () => {
  const wrapper = shallow(<ThumbnailMenu { ...fakeState } />);
  expect(wrapper.find("div").children()).toHaveLength(4);
});
