import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router";
import { Select } from "@chakra-ui/select";
import "./App.css";
import NavBar from "./components/NavBar";
import { CoinsContext } from "./contexts/coinsContext";

function App() {
  const Homepage = lazy(() => import("./pages/Homepage"));
  const Exchange = lazy(() => import("./pages/Exchange"));
  const { setCurrency, currency } = useContext(CoinsContext);
  const handleInputChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="App">
      <NavBar />

      <Select
        value={currency}
        onChange={handleInputChange}
        placeholder="Currency"
      >
        <option value="USD">USD</option>
        <option value="JPY">JPY</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </Select>
      <Switch>
        <Suspense fallback="Loading...">
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/exchange/:Id">
            <Exchange />
          </Route>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
