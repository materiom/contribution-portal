import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { CordraClient } from "@cnri/cordra-client";
import { userContext } from "../Hooks/UserContext";

const client = new CordraClient("https://localhost:8443");

export default function PrivateRoute({ children, ...rest }) {
  const userStatus = useContext(userContext);
  return (
    <Route
      {...rest}
      render={() => {
        return userStatus.user.loggedIn === true ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
