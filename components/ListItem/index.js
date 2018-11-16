import React from "react";

export default class ListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  itemStyle = {
    border: "1px solid red",
    height: "17px",
  };

  content() {
    if(this.props.item.clicked) {
      return (
        <form onSubmit={this.props.onSubmit}>
          <input
            id={this.props.id}
            value={this.props.item.value}
            onChange={this.props.onChange}
          />
        </form>
      );
    } else {
      return (
        <div
          id={this.props.id}
          style={this.itemStyle}
          onClick={this.props.onClick}
        >
          {this.props.item.value}
        </div>
      );
    }
  }

  render() {
    return this.content();
  }
}
