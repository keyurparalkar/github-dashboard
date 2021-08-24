import { Grid } from "@chakra-ui/react";
import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import RepoDetails from "./components/RepoDetails";
import CompareRepos from "./pages/CompareRepos";
import SearchPage from "./pages/SearchPage";

const Routing = () => {
  return (
    <Router>
      <Switch>
      <Grid
      h="100vh"
      templateColumns="repeat(3, 1fr)"
      templateRows="60px repeat(3,1fr)"
      gap={1}
    >
        <Header />
        <Route exact path="/">
          <SearchPage />
        </Route>

        <Route path="/repo/:name+">
          <RepoDetails />
        </Route>

        <Route path="/compare-repos">
          <CompareRepos />
        </Route>
        </Grid>
      </Switch>
    </Router>
  );
};

export default Routing;
