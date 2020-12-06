import React from "react";

function MenuIcon(props) {
  return (
    <svg
      class="icon-menu"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect x="0" fill="none" width="24" height="24"></rect>
      <g>
        <path d="M21,11H3v2H21Zm0-5H3V8H21Zm0,10H3v2H21Z"></path>
      </g>
    </svg>
  );
}

export default MenuIcon;
