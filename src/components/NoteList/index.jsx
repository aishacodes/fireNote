import React from "react";

import "./NoteList.css";

import MenuIcon from "../icons/MenuIcon";
import NewNoteIcon from "../icons/NewNoteIcon";

const SerachForm = () => {
  return (
    <div className="SearchForm">
      <form>
        <input type="text" placeholder="All Notes" />
      </form>
    </div>
  );
};

const Menu = ({ addNote }) => {
  return (
    <div className="Menu">
      <MenuIcon style={{ width: "24px", fill: "#618df2" }} />
      <SerachForm />
      <NewNoteIcon
        style={{ width: "24px", fill: "#618df2", cursor: "pointer" }}
        onClick={addNote}
      />
    </div>
  );
};

function index({ addNote, Content }) {
  return (
    <div className="NoteList">
      <Menu addNote={addNote} />
      <div className="notes">
        <div className="note">
          <span className="note-content">{Content}</span>
        </div>
      </div>
    </div>
  );
}

export default index;
