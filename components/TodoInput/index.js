import React from "react";
import ListItem from "../ListItem";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: [],
      currentItemIndex: "",
    };
  }

  todoStyle = {
    border: "1px solid black",
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newItemsArray = this.state.items;
    newItemsArray[newItemsArray.length] = {
      value: this.state.input,
      clicked: false,
    };
    this.setState({ items: newItemsArray });
    this.setState({ input: "" });
  }

  handleItemClick(e) {
    e.preventDefault();
    let index = e.target.getAttribute("id");
    let items = this.state.items;
    items[index].clicked = true;
    this.setState({ items });
    this.setState({ currentItemIndex: index });
  }

  handleItemInputChange(e) {
    e.preventDefault();
    let index = e.target.getAttribute("id");
    let items = this.state.items;
    items[index].value = e.target.value;
    this.setState({ items })
  }

  handleItemInputSubmit(e) {
    e.preventDefault();
    let items = this.state.items;
    items[this.state.currentItemIndex].clicked = false;
      this.setState({items});
  }

  render() {
    let listItems = (this.state.items.map((item, index) => {
      return (
        <ListItem
          id={index}
          key={index}
          item={item}
          itemClicked={item.clicked}
          onClick={(e) => this.handleItemClick(e)}
          onChange={(e) => this.handleItemInputChange(e)}
          onSubmit={(e) => this.handleItemInputSubmit(e)}
        />
      );
    }));
    return (
      <div
        className="todo"
        style={this.todoStyle}
      >
      < form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.input} onChange={(e) => this.handleChange(e) }/>
      </form>
      {listItems}
      </div>
    );
  }
}
