import React, { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import NavBar from "./components/NavBar";
import { CoinsContext } from "./contexts/coinsContext";
import { Box, Flex } from "@chakra-ui/layout";
import CurrencyChoice from "./components/CurrencyChoice";

function App() {
  const Homepage = lazy(() => import("./pages/Homepage"));
  const Exchange = lazy(() => import("./pages/Exchange"));
  const ctx = useContext(CoinsContext);

  return (
    <div className="App">
      <NavBar />
      <CurrencyChoice
        cryptoComparator={ctx.cryptoComparator}
        setCryptoComparator={ctx.setCryptoComparator}
        setCurrency={ctx.setCurrency}
        currency={ctx.currency}
        allCoins={ctx.allCoins}
      />
      <Switch>
        <Suspense fallback="Loading...">
          <Route exact path="/">
            <Homepage />
            {/* Todo - Pass allCoins through props, not through context */}
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
