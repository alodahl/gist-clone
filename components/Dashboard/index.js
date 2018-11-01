import React from "react";
import Form from "../Form"

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return (
          <div className="dashboard">
            <Form/>
          </div>
        );
      }

}
