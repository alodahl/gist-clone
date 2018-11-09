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
  const editButtonStyle = {
    float: "right",
    border: "1px solid #ccc",
    borderRadius: "4px",
    height: "34px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
    color: "#586069",
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
      <button
        type="button"
        onClick={props.handleEdit}
        style={editButtonStyle}
      >
      <svg class="pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill="#24292e" fillRule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
      edit gist
      </button>
    </div>
  );
}
