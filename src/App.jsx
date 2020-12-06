import React, { useState } from "react";

import "./App.css";

import NoteList from "./components/NoteList";
import NoteArea from "./components/NoteArea";
import LoginIcon from "./components/icons/LoginIcon";

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <div className="App">
      <NoteList />
      <NoteArea />
    </div>
  ) : (
    <AuthView />
  );
}

export default App;

const AuthView = () => {
  const [accessType, setAccessType] = useState("Login");

  return (
    <div className="AuthView">
      <LoginIcon />
      <form>
        <h1>{accessType === "Login" ? "Log in" : "Sign in"}</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>{accessType === "Login" ? "Log in" : "Sign in"}</button>
      </form>
      <p>
        <input type="checkbox" /> Remember me
      </p>
      <a href="hello.com"> Forget your password? </a>
      <p>
        <span className="line"></span> or <span className="line"></span>
      </p>
      {accessType === "Login" ? (
        <p>
          Don't have an account?{" "}
          <span className="signup" onClick={() => setAccessType("signup")}>
            Sign up
          </span>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <span className="login" onClick={() => setAccessType("Login")}>
            Log in
          </span>
        </p>
      )}
    </div>
  );
};
