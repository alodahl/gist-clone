import React from 'react';
import ReactDOM from 'react-dom';
import Gist from './index';
import "../../../jest.setup.js"
import { shallow, mount, render } from 'enzyme';

const fakeProps =  {
          description: "mary",
          filename: "tyler",
          textarea: "moore",
        };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gist />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Renders the text", () => {
  const wrapper = shallow(<Gist { ...fakeProps } />);
  expect(wrapper.find("h2").text()).toEqual(fakeProps.filename);
  expect(wrapper.find("p").first().text()).toEqual(fakeProps.description);
  expect(wrapper.find("p").last().text()).toEqual(fakeProps.textarea);
});

it("Renders the buttons", () => {
  const wrapper = shallow(<Gist { ...fakeProps } />);
  expect(wrapper.find("button").last().text()).toEqual("edit gist");
  expect(wrapper.find("button").first().text()).toEqual("Delete");
});
