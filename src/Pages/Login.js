import React, { useContext, useEffect, useState } from "react";
import { CordraClient } from "@cnri/cordra-client";
import { Redirect } from "react-router-dom";
import { userContext } from "../Hooks/UserContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [user, handleUserChange] = useState("");
  const [pass, handlePasswordChange] = useState("");
  const [isLoggedIn, handleLoginChange] = useState(false);

  // Create new Cordra client && login
  const client = new CordraClient("https://localhost:8443");
  const userStatus = useContext(userContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      userStatus.handleLogin(parsedUser);
      history.push("/", { from: "login" });
    }
  }, []);

  const login = async (event) => {
    event.preventDefault();
    const options = {
      username: user,
      password: pass,
    };
    await client.authenticate(options).then((res) => {
      if (res.active) {
        console.log(res);
        userStatus.handleLogin(res);
        history.push("/", { from: "/login" });
      }
    });
  };

  return (
    <div>
      {!isLoggedIn ? (
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
