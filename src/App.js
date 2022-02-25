import React from "react";
import "./index.css";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Dashboard from "./Pages/Dashboard";
import { NotFound } from "./Pages/NotFound";
import Warning from "./Pages/Warning";
import EditRecipe from "./Pages/EditRecipe";
import NewRecipe from "./Pages/NewRecipe";
import SubmissionConfirmation from "./Pages/SubmissionConfirmation";
import YourRecipes from "./Pages/YourRecipes";

const user = {};
user.name = "Liam";
user.isNewUser = true;
const App = () => (
  <BrowserRouter>
    <div className="flex h-screen bg-neutral-300 min-w-full">
      {/* Sliding side menu */}

      <Switch>
        <SideBar />
      </Switch>

      <Switch>
        <Route exact path="/">
          <Dashboard user={user} />
        </Route>
        <Route exact path="/warning" component={Warning} />
        <Route exact path="/new-recipe" component={NewRecipe} />
        <Route exact path="/edit-recipe" component={EditRecipe} />
        <Route exact path="/edit-recipe/:id" component={EditRecipe} >
            <EditRecipe/>
        </Route>
        <Route exact path="/your-recipes" component={YourRecipes} />
        <Route exact path="/confirmation" component={SubmissionConfirmation} />

        <Route exact to="/*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
