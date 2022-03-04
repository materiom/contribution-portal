// Import dependencies 
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

// Import custom hooks
import userContext from "../Hooks/UserContext";

// Custom route with auth added
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
