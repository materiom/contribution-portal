import React, { useEffect, useState } from "react";
import "./index.css";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Dashboard from "./Pages/Dashboard";
import { NotFound } from "./Pages/NotFound";
import Login from "./Pages/Login";
import Warning from "./Pages/Warning";
import EditRecipe from "./Pages/EditRecipe";
import NewRecipe from "./Pages/NewRecipe";
import SubmissionConfirmation from "./Pages/SubmissionConfirmation";
import YourRecipes from "./Pages/YourRecipes";
import { CordraClient } from "@cnri/cordra-client";
import PrivateRoute from "./Components/PrivateRoute";
import useChangeRoute from "./Hooks/ChangeRoute";
import { userContext } from "../src/Hooks/UserContext";

// const options = {
//   username: "admin",
//   password: "pass",
// };

// const client = new CordraClient("https://localhost:8443", options);
// client.search("type:Schema").then((response) => {
//   console.log("Number of results: " + response.size);
//   response.results.forEach((result) => {
//     console.log(result.content.name);
//   });
// });

// const user = {};
// user.name = "Liam";
// user.isNewUser = true;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        loggedIn: false,
        token: "",
      },
    };
  }

  handleLogin = (userObject) => {
    this.setState({ user: { loggedIn: true, userObject: userObject } });
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  render() {
    const userObject = {
      user: this.state.user,
      handleLogin: this.handleLogin,
    };
    return (
      <userContext.Provider value={userObject}>
        <BrowserRouter>
          <div className="flex h-screen bg-neutral-300 min-w-full">
            {/* Sliding side menu */}

            <Switch>
              <SideBar />
            </Switch>

            <Switch>
              <PrivateRoute exact="true" path="/">
                <Dashboard user={this.state.user} />
              </PrivateRoute>
              <Route path="/login" component={Login} />
              <Route $exact={true} path="/warning" component={Warning} />
              <Route $exact={true} path="/new-recipe" component={NewRecipe} />
              <Route $exact={true} path="/edit-recipe" component={EditRecipe} />
              <Route
                $exact={true}
                path="/edit-recipe/:id"
                component={EditRecipe}
              >
                <EditRecipe />
              </Route>
              <PrivateRoute
                exact="true"
                path="/your-recipes"
                component={YourRecipes}
              />
              <Route
                $exact={true}
                path="/confirmation"
                component={SubmissionConfirmation}
              />

              <Route $exact={true} to="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </userContext.Provider>
    );
  }
}
