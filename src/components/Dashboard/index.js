import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "../Navbar";
import Form from "../Form";
import Gist from "../Gist";
import ThumbnailMenu from "../ThumbnailMenu";
import $ from "jquery";


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

  componentDidMount() {
    this.getGistsFromApi();
  }

  getGistsFromApi() {
    const settings = {
      url: '/gists',
      // headers: { 'Authorization': `Bearer ${state.token}` },
      dataType: 'json',
      type: 'GET',
      success: function(freshGists) {
        this.setState({ gists: freshGists });
        console.log(freshGists);
      },
      error: function(data) {
        console.log("Error: API could not answer your GET request.");
      }
    };
    $.ajax(settings);
  }

  // saveGistToApi(gistData) {
  //   const settings = {
  //     url: `/gists/${state.idOfGistBeingEdited}`,
  //     // headers: { 'Authorization': `Bearer ${state.token}` },
  //     data: gistData,
  //     dataType: 'json',
  //     type: state.idOfGistBeingEdited? 'PUT' : 'POST',
  //     success: function(gist) {
  //       if(state.idOfGistBeingEdited){
  //         for(var i = 0; i < this.state.gists.length; i++) {
  //           if(this.state.gists[i].id == state.idOfGistBeingEdited) {
  //              this.setState(this.)
  //           }
  //         }
  //         renderGists(state.gists)
  //       }else{
  //         state.gists.push(gist)
  //         renderGists(state.gists)
  //       }
  //       closeModal();
  //       clearForm();
  //     },
  //     error: function(data) {
  //       console.log("Error: API could not answer your save request.");
  //     }
  //   };
  //   $.ajax(settings);
  // }

  // deleteGistFromApi() {
  //   const settings = {
  //     url: `/gists/${state.idOfGistBeingEdited}`,
  //     headers: { 'Authorization': `Bearer ${state.token}` },
  //     dataType: 'json',
  //     type: 'DELETE',
  //     success: function() {
  //       for(var i = 0; i < state.gists.length; i++) {
  //         if(state.gists[i].id == state.idOfGistBeingEdited) {
  //             state.gists.splice(i, 1);
  //             break;
  //         }
  //       }
  //       renderGists(state.gists)
  //       closeModal();
  //     },
  //     error: function(data) {
  //       console.log("Error: API could not answer your delete request.");
  //       alert("Error: " + data.responseJSON.message);
  //     }
  //   };
  //   $.ajax(settings);
  // }

  handleNewGistButton(event) {
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
              handleNewGist={e => this.handleNewGistButton(e)}
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
                // <Route path="/gists" component={Gist}/>
                // <Route path="/" component={Form}/>
              </div>
            </div>
          </Router>
        );
      }

}
