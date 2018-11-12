import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './index';
import Navbar from '../Navbar';
import '../../../jest.setup.js';
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

const handleNewGist = function(event) {
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
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Renders its children: Navbar, Thumbnail, Gist, Form ", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper.find("div").children()).toHaveLength(4);
  const mountedWrapper = mount(<Dashboard />);
  expect(mountedWrapper.contains("New gist")).toEqual(true);
  expect(mountedWrapper.containsMatchingElement(<path fill="#bbb" fillRule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"></path>)).toEqual(true);
  expect(mountedWrapper.find("form.form").exists()).toEqual(true);
  expect(mountedWrapper.find("div.fakeclass").exists()).toEqual(false);
});

it("Registers click events to toggle gist or form", () => {
  const dashboard = mount(<Dashboard { ...fakeState } handleNewGist={handleNewGist} />);
  dashboard.find('div.thumbnail').first().simulate('click');
  expect(dashboard.find('div.gist').exists()).toEqual(true);
  expect(dashboard.find('form.form').exists()).toEqual(false);
  dashboard.find('h2').first().simulate('click');
  expect(dashboard.find('div.gist').exists()).toEqual(false);
  expect(dashboard.find('form.form').exists()).toEqual(true);
});
