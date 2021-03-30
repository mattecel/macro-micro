import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import RecipeListPage from './pages/RecipeListPage/RecipeListPage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/recipes" exact component={RecipeListPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
