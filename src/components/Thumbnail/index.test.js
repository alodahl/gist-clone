import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './index';
import "../../../jest.setup.js"
import { shallow, mount, render } from 'enzyme';

const fakeProps =  {
          description: "mary",
          filename: "tyler",
          textarea: "moore",
        };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thumbnail { ...fakeProps } />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Renders the text", () => {
  const wrapper = shallow(<Thumbnail { ...fakeProps } />);
  expect(wrapper.find("p").first().text()).toEqual(fakeProps.filename);
  expect(wrapper.find("p").last().text()).toEqual(fakeProps.description);
});
