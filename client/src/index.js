// imports
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import "assets/scss/theme.scss?v=1.9.0";

// pages for routes
import RecipesPage from "pages/RecipesPage/RecipesPage";
import LoginPage from "pages/LoginPage/LoginPage";
import RecipeInfoPage from "pages/RecipeInfoPage/RecipeInfoPage";
import VaultPage from "pages/VaultPage/VaultPage";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/recipes" exact component={RecipesPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/recipes/:recipeId" component={RecipeInfoPage} />
      <Route path="/vault" component={VaultPage} />
      <Redirect path="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
