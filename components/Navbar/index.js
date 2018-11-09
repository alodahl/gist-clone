import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navbarStyle = {
    fontFamily: "Segoe UI,Helvetica,Arial,sans-serif",
    position: "absolute",
    top: "0",
    left: "0",
    background: '#24292e',
    width: "100%",
    height: "54px",
    color: "white",
    lineHeight: "54px",
  }
  innerNavStyle = {
    // width: "980px",
    margin: "0 auto",
  }
  gistCloneStyle = {
    textAlign: "left",
    display: "inline",
    margin: "0 20px",
    fontWeight: "100",
    fontSize: "28px",
  }
  newGistStyle = {
    color: "white",
    float: "right",
    display: "inline",
    margin: "0 20px",
    fontSize: "14px",
  }

  render() {
    return(
      <div style={this.navbarStyle}>
        <div style={this.innerNavStyle}>
          <h1 style={this.gistCloneStyle}>
          <b>Gist</b>Clone
          </h1>
          <a
            href="#"
            onClick={this.props.handleNewGist}>
            <h2 style={this.newGistStyle}>
              New gist
            </h2>
          </a>
        </div>
      </div>
    );
  }
}
