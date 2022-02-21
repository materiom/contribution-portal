import React from "react";
import "./index.css";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import SideBar from "./Components/SideBar";
import { HomePage } from "./Pages/HomePage";
import { PageTwo } from "./Pages/PageTwo";
import Dashboard from "./Pages/Dashboard";
import { NotFound } from "./Pages/NotFound";
import Warning from "./Pages/Warning";
import EditRecipe from "./Pages/EditRecipe";
import NewRecipe from "./Pages/NewRecipe";

const user = {};
user.name = "Liam";
user.isNewUser = true
const App = () => (
  <BrowserRouter>
    <div className="flex h-screen bg-neutral-300 min-w-screen">
      {/* Sliding side menu */}

      <Switch>
        <div className="flex flex-col">
          <SideBar />
        </div>
      </Switch>

      <Switch>
        <Route exact path="/">
          <Dashboard user={user} />
        </Route>
        <Route exact path="/warning" component={Warning} />
        <Route exact path="/new-recipe" component={NewRecipe} />
        <Route exact path="/edit-recipe" component={EditRecipe} />
        <Route path="/react" component={HomePage} />

        <Route exact to="/*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
