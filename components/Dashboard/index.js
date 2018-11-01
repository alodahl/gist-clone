import React from "react";
import Form from "../Form"

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dashboardStyle = {
    padding: '8px',
  }

    render() {
        return (
          <div
            className="dashboard"
            style={this.dashboardStyle}>
            <Form/>
          </div>
        );
      }

}
