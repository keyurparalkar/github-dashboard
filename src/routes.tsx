import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
