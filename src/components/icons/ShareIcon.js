import React from "react";

function ShareIcon(props) {
  return (
    <svg
      class="icon-share"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      {...props}
    >
      <path d="M7.707 7.707L6.293 6.293 11 1.586l4.707 4.707-1.414 1.414L12 5.414V13h-2V5.414L7.707 7.707zM17 9v9H5V9H3v11h16V9h-2z"></path>
    </svg>
  );
}

export default ShareIcon;
