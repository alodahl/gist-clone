import React from "react";

export default function Thumbnail(props) {

  const fileName = JSON.stringify(props.filename);

  const divStyle = {
    height: "46px",
    width: "158px",
    padding: "22px 0 22px 16px",
    display: "inline-block",
    cursor: "pointer",
  };
  const iconStyle = {
    float: "left",
    height: "46px",
    cursor: "auto"
  };
  const thumbTextStyle = {
    float: "left",
    padding: "4px 0",
  };
  const filenameTextStyle = {
    margin: "2px 0 2px 8px",
    textDecoration: "none",
    color: "#0366d6",
    fontWeight: "600",
    fontSize: "14px",
    width: "123px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const descriptionTextStyle = {
    ...filenameTextStyle,
    fontSize: "12px",
    color: "#586069",
  };

  return (
    <div
      filename={fileName}
      className="thumbnail"
      style={divStyle}
      role= "button"
      onClick={props.handleThumbnailClick}
    >
      <svg style={iconStyle} filename={fileName} height="36" viewBox="0 0 12 16" version="1.1" width="27" aria-hidden="true"><path fill="#bbb" fillRule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"></path></svg>
      <div
        filename={fileName}
        className="thumb__text"
        style={thumbTextStyle}
      >
        <p
          filename={fileName}
          style={filenameTextStyle}
        >
          {props.filename}
        </p>
        <p
          filename={fileName}
          style={descriptionTextStyle}
          >
          {props.description}
        </p>
      </div>
    </div>
  );
}
