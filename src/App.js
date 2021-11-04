import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const Homepage = lazy(() => import("./pages/Homepage"));
  const Exchange = lazy(() => import("./pages/Exchange"));
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Suspense fallback="Loading...">
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/exchange/:name">
            <Exchange />
          </Route>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
