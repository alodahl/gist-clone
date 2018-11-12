import React from "react";

export default function Gist(props) {

  const gistStyle = {
    padding: "24px 8px",
    textAlign: "left",
  };
  const gistBoxStyle = {
    border: "1px solid rgb(221, 221, 221)",
    fontFamily: "SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace",
    fontSize: "12px",
  };
  const gistDescriptionStyle = {
    fontSize: "14px",
  };
  const gistFilenameStyle = {
    backgroundColor: "#fafbfc",
    padding: "18px 10px",
    height: "16px",
    borderBottom: "1px solid rgb(221, 221, 221)",
  };
  const gistIconStyle = {
    // height: "32px",
    position: "absolute",
    display: "inline",
    margin: "0",
  };
  const gistFilenameTextStyle = {
    display: "inline",
    textDecoration: "none",
    color: "#0366d6",
    fontSize: "12px",
    fontWeight: "600",
    padding: "0 18px",
    lineHeight: "20px",
  };
  const gistTextStyle = {
    padding: "0 30px",
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
    marginLeft: "10px",
  };
  const deleteButtonStyle = {
    ...editButtonStyle,
    color: "red",
  };

  return (
    <div
      className="gist"
      style={gistStyle}
    >
      <button
        type="button"
        onClick={props.handleDelete}
        style={deleteButtonStyle}
      >
      <svg className="trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill="red" fillRule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
      Delete
      </button>
      <button
        type="button"
        onClick={props.handleEdit}
        style={editButtonStyle}
      >
      <svg className="pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill="#24292e" fillRule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
      edit gist
      </button>
      <p style={gistDescriptionStyle}>{props.description}</p>
      <div
        className="gist__box"
        style={gistBoxStyle}
      >
        <div style={gistFilenameStyle}>
          <svg style={gistIconStyle} viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"></path></svg>
          <h2 style={gistFilenameTextStyle}>
            {props.filename}
          </h2>
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
        className="gist__button--edit"
        onClick={props.handleEdit}
        style={editButtonStyle}
      >
      <svg className="pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill="#24292e" fillRule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
      edit gist
      </button>
    </div>
  );
}
