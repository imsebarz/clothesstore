import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./assets/styles/global.scss";
import Home from "./Containers/Home";
import SearchResults from "./Containers/SearchResults";
import Footer from "./Components/Footer";

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
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
