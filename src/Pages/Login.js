// Import dependencies
import React, { useContext, useEffect, useState } from "react";
import { CordraClient } from "@cnri/cordra-client";
import { Redirect, useHistory } from "react-router-dom";
// Import custom hooks
import userContext from "../Hooks/UserContext";

export default function Login() {
  // Used for page navigation
  const history = useHistory();
  // Initialize state
  const [user, handleUserChange] = useState("");
  const [pass, handlePasswordChange] = useState("");

  // Create new Cordra client && login
  const client = new CordraClient("https://localhost:8443");
  const userStatus = useContext(userContext);

  // Check for user login in local storage on initial render
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    // If found, populate user object and redirect to Dashboard
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      userStatus.handleLogin(parsedUser);
      history.push("/", { from: "login" });
    }
  }, []);

  // Login function
  const login = async (event) => {
    event.preventDefault();
    const options = {
      username: user,
      password: pass,
    };
    await client.authenticate(options).then((res) => {
      if (res.active) {
        userStatus.handleLogin(res);
        history.push("/", { from: "/login" });
      }
    });
  };

  return (
    <div>
      {/* If user is logged in redirect to Dashboard, else show login form */}
      {!userStatus.user.loggedIn ? (
        <form onSubmit={login}>
          <input
            type="text"
            onChange={(event) => handleUserChange(event.target.value)}
            value={user}
            name="username"
          ></input>
          <input
            onChange={(event) => handlePasswordChange(event.target.value)}
            type="password"
            value={pass}
            name="password"
          ></input>
          <button type="submit">Login</button>
        </form>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
