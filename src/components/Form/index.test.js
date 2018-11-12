import React from 'react';
import ReactDOM from 'react-dom';
import Form from './index';
import "../../../jest.setup.js"
import { shallow, mount, render } from 'enzyme';

const fakeProps =  {
          description: "mary",
          filename: "tyler",
          textarea: "moore",
        };

const emptyProps =  {
          description: "",
          filename: "",
          textarea: "",
        };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form { ...fakeProps }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Renders autofilled inputs", () => {
  const wrapper = shallow(<Form { ...fakeProps } />);
  expect(wrapper.find("input").first().props().value).toEqual(fakeProps.description);
  expect(wrapper.find("input").last().props().value).toEqual(fakeProps.filename);
  expect(wrapper.find("textarea").last().props().value).toEqual(fakeProps.textarea);
});

it("Disables Submit Button unless filename and textarea have a value", () => {
  const wrapper = shallow(<Form { ...fakeProps } />);
  expect(wrapper.find("input").first().props().value).toEqual(fakeProps.description);
  expect(wrapper.find("input").last().props().value).toEqual(fakeProps.filename);
  expect(wrapper.find("button").props().disabled).toEqual(false);
  const emptyWrapper = shallow(<Form { ...emptyProps }/>);
  expect(emptyWrapper.find("input").first().props().value).toEqual("");
  expect(emptyWrapper.find("input").last().props().value).toEqual("");
  expect(emptyWrapper.find("button").props().disabled).toEqual(true);
});
