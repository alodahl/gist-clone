import React from "react";

export default function ListItemForm(props) {

  const itemStyle = {
    border: "1px solid red",
  }

  return (
    <form style={itemStyle}>
      {props.text}
    </form>
  );
}
