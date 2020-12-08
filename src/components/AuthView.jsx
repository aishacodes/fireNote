import React, { useState } from "react";
import { auth, database } from "../utils/firebase";

import LoginIcon from "./icons/LoginIcon";

const AuthView = () => {
  const [accessType, setAccessType] = useState("Login");

  const handleAuth = async (e) => {
    e.preventDefault();

    let [email, password] = e.target;
    email = email.value;
    password = password.value;

    let user;
    try {
      if (accessType === "Login") {
        user = await auth.signInWithEmailAndPassword(email, password);
      } else {
        user = await auth.createUserWithEmailAndPassword(email, password);
        console.log(user);
      }
      if (user?.additionalUserInfo?.isNewUser) {
        database.child("users/" + user.user.uid).set({
          email,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AuthView">
      <LoginIcon />
      <form onSubmit={handleAuth}>
        <h1>{accessType === "Login" ? "Log in" : "Sign in"}</h1>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button style={{ cursor: "pointer" }}>
          {accessType === "Login" ? "Log in" : "Sign in"}
        </button>
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

export default AuthView;
