import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard";
function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </main>
  );
}
export default App;
