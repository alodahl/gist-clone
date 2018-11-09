import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
import Gist from "../Gist";
import ThumbnailMenu from "../ThumbnailMenu";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleToGist: false,
      gists: [
        {
          description: "woo",
          filename: "tang",
          textarea: "clan",
        },
        {
          description: "mary",
          filename: "tyler",
          textarea: "moore",
        },
      ],
      currentGist: {
        description: "",
        filename: "",
        textarea: "",
      }
    };
  }

  dashboardStyle = {
    padding: "0",
  }
  dashboardMainStyle = {
    marginTop: "150px",
    padding: "8px",
    paddingTop: "16px",
  }

  handleNewGist(event) {
    event.preventDefault();
    this.setState({ toggleToGist: false });
    this.setState({ currentGist: {
      description: "",
      filename: "",
      textarea: "",
      }
     });
  }

  handleThumbnailClick(e) {
    e.preventDefault();
    let fileName = JSON.parse(e.target.getAttribute("fileName"));
    console.log(fileName);
    let clickedGist = this.state.gists.find( gist => gist.filename === fileName)
    this.setState( {
      currentGist: clickedGist } );
    this.setState({ toggleToGist: true });
  }

  handleDescription(e) {
    this.setState( {currentGist: { ...this.state.currentGist, description: e.target.value }});
  }

  handleFilename(e) {
    this.setState( {currentGist: { ...this.state.currentGist, filename: e.target.value }});
  }

  handleTextarea(e) {
    this.setState( {currentGist: { ...this.state.currentGist, textarea: e.target.value }});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ gists: [...this.state.gists, this.state.currentGist ]});
    this.setState({ toggleToGist: true });
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({ toggleToGist: false });
  }

    render() {
        return (
          <div
            className="dashboard"
            style={this.dashboardStyle}>
            <Navbar
              handleNewGist={e => this.handleNewGist(e)}
            />
            <ThumbnailMenu { ...this.state }
              handleThumbnailClick={e => this.handleThumbnailClick(e)}
            />
            <div
              style={this.dashboardMainStyle}
            >
            {
              this.state.toggleToGist
              ?<Gist { ...this.state.currentGist }
                handleEdit={e => this.handleEdit(e)}/>
              :<Form
                { ...this.state.currentGist }
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
