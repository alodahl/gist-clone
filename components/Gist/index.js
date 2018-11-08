import React from "react";

export default function Gist(props) {

  const gistStyle = {
    paddingTop: "24px",
  };

  const gistBoxStyle = {
      border: "1px solid #eee",
      fontFamily: "SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace",
      fontSize: "12px",
  };

  const gistFilenameStyle = {
      backgroundColor: "#ccc",
      padding: "10px 5px",
  };

  const gistTextStyle = {
      padding: "10px 5px",
  };

  return (
    <div
      className="gist"
      style={gistStyle}
    >
      <p className="gist__description">{props.description}</p>
      <div
        className="gist__box"
        style={gistBoxStyle}
      >
        <div style={gistFilenameStyle}>
          <a href="#"
            className="gist__filename"
          >
            {props.filename}
          </a>
        </div>
        <div style={gistTextStyle} >
          <p
            className="gist__textarea"
          >
            {props.textarea}
          </p>
        </div>
      </div>
    </div>
  );
}
