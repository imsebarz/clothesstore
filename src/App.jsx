import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SearchResults from "./Components/SearchResults";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/search-results">
            <SearchResults />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
