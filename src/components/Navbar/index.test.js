import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './index';
import Dashboard from '../Dashboard'
import "../../../jest.setup.js"
import { shallow, mount, render } from 'enzyme';

const fakeState = {
  toggleToGist: true,
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
  ],
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
