import React, { useState } from "react";
import { auth, database } from "./utils/firebase";

import "./App.css";

import NoteList from "./components/NoteList";
import NoteArea from "./components/NoteArea";
import AuthView from "./components/AuthView";
function App() {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");

  const addNote = (e) => {
    database.push({ content });
    e.target.value = "";
  };

  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) setUser(currentUser);
    else setUser(null);
  });

  return !user ? (
    <AuthView />
  ) : (
    <div className="App">
      <NoteList Content={content} addNote={addNote} />
      <NoteArea handleContent={(e) => setContent(e.target.textContent)} />
    </div>
  );
}

export default App;
