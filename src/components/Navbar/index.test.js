import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './index';
import Dashboard from '../Dashboard'
import "../../../jest.setup.js"
import { shallow, mount, render } from 'enzyme';

const fakeState = {
  toggleToGist: true,
}

const clickProp = function(event) {
  event.preventDefault();
  this.setState({ toggleToGist: false });
  this.setState({ currentGist: {
    description: "",
    filename: "",
    textarea: "",
    new: true,
    }
  });
   this.setState({ currentGistIndex: this.state.gists.length });
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Renders the text", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find("h1").text()).toEqual("GistClone");
  expect(wrapper.find("h2").text()).toEqual("New gist");
});

it("Registers click events", () => {
  const wrapper = mount(<Navbar { ...fakeState } handleNewGist={clickProp} />);
  const dashboard = mount(<Dashboard />);
  console.log(dashboard.debug());
  expect(dashboard.contains("div.gist")).toEqual(true);
  expect(dashboard.contains("form.form")).toEqual(false);
  wrapper.find('h2').simulate('click');
  expect(dashboard.contains("div.gist")).toEqual(false);
  expect(dashboard.contains("form.form")).toEqual(true);

});
