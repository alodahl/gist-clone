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
    background: "#24292e",
    width: "100%",
    height: "54px",
    color: "white",
    lineHeight: "54px",
  }
  innerNavStyle = {
    margin: "0 auto",
  }
  gistCloneStyle = {
    float: "left",
    display: "inline",
    margin: "0 20px",
    fontWeight: "100",
    fontSize: "28px",
    backgroundColor: "#24292e",
    border: "none",
  }
  newGistStyle = {
    color: "white",
    float: "right",
    display: "inline",
    margin: "0 20px",
    fontSize: "14px",
    lineHeight: "54px",
    cursor: "pointer",
  }

  render() {
    return(
      <div style={this.navbarStyle}>
        <div style={this.innerNavStyle}>
          <h1 style={this.gistCloneStyle}>
          <b>Gist</b>Clone
          </h1>
          <h2
            role="button"
            style={this.newGistStyle}
            onClick={this.props.handleNewGist}
          >
            New gist
          </h2>
        </div>
      </div>
    );
  }
}
