import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router";
import { Select } from "@chakra-ui/select";
import "./App.css";
import NavBar from "./components/NavBar";
import { CoinsContext } from "./contexts/coinsContext";
import { Box, Flex } from "@chakra-ui/layout";
import CurrencyChoice from "./components/CurrencyChoice";

function App() {
  const Homepage = lazy(() => import("./pages/Homepage"));
  const Exchange = lazy(() => import("./pages/Exchange"));
  const { setCurrency, currency } = useContext(CoinsContext);

  return (
    <div className="App">
      <NavBar />
      <CurrencyChoice setCurrency={setCurrency} currency={currency} />
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
