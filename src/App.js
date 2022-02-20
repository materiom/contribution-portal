import React from "react";
import "./index.css";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import SideBar from "./Components/SideBar";
import { HomePage } from "./Pages/HomePage";
import { PageTwo } from "./Pages/PageTwo";
import Dashboard from "./Pages/Dashboard";
import { NotFound } from "./Pages/NotFound";

const user = {};
user.name = "Liam";
const App = () => (
  <BrowserRouter>
    <div className="flex h-screen bg-neutral-300 min-w-screen">
      {/* Sliding side menu */}
      <BrowserRouter>
        <Switch>
          <div className="flex flex-col">
            <SideBar />
          </div>
        </Switch>
      </BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard user={user} />
        </Route>
        <Route path="/new" component={PageTwo} />
        <Route path="/react" component={HomePage} />

        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
