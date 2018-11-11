import React from "react";
import Link from 'next/link';
import Thumbnail from '../Thumbnail';

export default function ThumbnailMenu(props) {

  const menuStyle = {
    position: "absolute",
    top: "54px",
    left: "0",
    right: "0",
    height: "90px",
    backgroundColor: "#fafbfc",
    overflow: "auto",
    whiteSpace: "nowrap",
  };

  const menuList = props.gists.map((gist, index) => {
    return(
      <Link key={ index } href={`?filename=${gist.filename}&edit=false`}>
        <Thumbnail handleThumbnailClick={props.handleThumbnailClick} { ...gist } />
      </Link>
    );
  });

  return (
    <div style={menuStyle}>
      {menuList.reverse()}
    </div>
  );

}
