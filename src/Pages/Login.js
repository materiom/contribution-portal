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

  // Create new Cordra client
  const client = new CordraClient(process.env.REACT_APP_CORDRA_URL);
  const userStatus = useContext(userContext);

  // Check for user login in local storage on initial render
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
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
    <div className="m-auto">
      {/* If user is logged in redirect to Dashboard, else show login form */}
      {!userStatus.user.loggedIn ? (
        <div className="flex flex-col justify-center text-center mx-auto">
          <h1 className="text-4xl">Materiom Contribution Portal</h1>
          <h1 className="text-2xl">Login</h1>
          <form
            className="flex flex-col justify-around h-96 items-center"
            onSubmit={login}
          >
            <div className="flex flex-col items-center">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                onChange={(event) => handleUserChange(event.target.value)}
                value={user}
                name="username"
                label="username"
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="password">Password</label>
              <input
                onChange={(event) => handlePasswordChange(event.target.value)}
                type="password"
                value={pass}
                name="password"
                label="password"
              ></input>
            </div>
            <button className="blue-button" type="submit">
              Login
            </button>
            <p>
              Need an account? Let's get <a href="/register" className=" text-MatBlue hover:underline">registered!</a>
            </p>
          </form>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
