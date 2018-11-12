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
      currentGist: {
        description: "",
        filename: "",
        textarea: "",
        new: true,
      },
      currentGistIndex: "",
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
      new: true,
      }
    });
     this.setState({ currentGistIndex: this.state.gists.length });
  }

  handleThumbnailClick(e) {
    e.preventDefault();
    console.log(e.target);
    let fileName = JSON.parse(e.target.getAttribute("fileName"));
    let gistIndex;
    if (fileName) {
      let gist = this.state.gists.find( function(gist, index) {
        if ( gist.filename === fileName ) {
          gistIndex = index;
          return gist;
        }
        return null;
      })
      this.setState({ toggleToGist: true });
      this.setState( {
        currentGist: {
          description: gist.description,
          filename: gist.filename,
          textarea: gist.textarea,
          new: false,
        }
      } );
      this.setState( { currentGistIndex: gistIndex });
    }
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
    let index = this.state.currentGistIndex;
    if (index !== ""){
      let gists = this.state.gists;
      gists[this.state.currentGistIndex] = this.state.currentGist;
      gists[this.state.currentGistIndex].new = false;
      this.setState({ gists });
    } else {
      this.setState({ gists: [...this.state.gists, this.state.currentGist ]});
    }
    this.setState({ toggleToGist: true });
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({ toggleToGist: false });
  }

  handleDelete(event) {
    event.preventDefault();
    let index = this.state.currentGistIndex;
    if (index !== "") {
      let gists = this.state.gists;
      delete(gists[this.state.currentGistIndex]);
    }
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
                handleEdit={e => this.handleEdit(e)}
                handleDelete={e => this.handleDelete(e)}/>
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
