// imports
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import "assets/scss/theme.scss?v=1.9.0";

// pages for routes
import RecipesPage from "pages/RecipesPage/RecipesPage";
import LoginPage from "./pages/LogInPage/LogInPage";
import RecipeInfoPage from "pages/RecipeInfoPage/RecipeInfoPage";
import VaultPage from "pages/VaultPage/VaultPage";
import GroceryListPage from "pages/GroceryListPage/GroceryListPage";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/recipes" exact component={RecipesPage} />
      <Route path="/recipes/:recipeId" component={RecipeInfoPage} />
      <Route path="/vault" component={VaultPage} />
      <Route path="/grocery-list" component={GroceryListPage} />
      <Redirect path="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
