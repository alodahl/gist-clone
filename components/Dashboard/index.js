import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
import Gist from "../Gist";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleToGist: false,
      description: "",
      filename: "",
      textarea: "",
    };
  }

  dashboardStyle = {
    // marginTop: "60px",
    padding: "0",
    // paddingTop: "16px",
  }

  dashboardMainStyle = {
    marginTop: "60px",
    padding: "8px",
    paddingTop: "16px",

  }

  handleNewGist(event) {
    event.preventDefault();
    this.setState({ toggleToGist: false });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleFilename(e) {
    this.setState({ filename: e.target.value });
  }

  handleTextarea(e) {
    this.setState({ textarea: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ toggleToGist: true });
  }

    render() {
        return (
          <div
            className="dashboard"
            style={this.dashboardStyle}>
            <Navbar
              handleNewGist={e => this.handleNewGist(e)}
            />
            <div
              style={this.dashboardMainStyle}
            >
            {
              this.state.toggleToGist
              ?<Gist { ...this.state } />
              :<Form
                { ...this.state }
                handleDescription={e => this.handleDescription(e)}
                handleFilename={e => this.handleFilename(e)}
                handleTextarea={e => this.handleTextarea(e)}
                handleSubmit={e => this.handleSubmit(e)}
              />
            }
            </div>
          </div>
        );
      }

}
