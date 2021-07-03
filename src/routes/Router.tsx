import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, DynamicLoader } from "pages/common";
import Home from "pages/Home";

const NoMatch = DynamicLoader(() => import("pages/NoMatch"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Header>
    </BrowserRouter>
  );
};

export default Router;
