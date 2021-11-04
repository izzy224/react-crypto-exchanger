import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/exchange"></Route>
        <Route exact path="/real-time-graph"></Route>
      </Switch>
    </div>
  );
}

export default App;
