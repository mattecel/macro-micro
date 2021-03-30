import React, { Component } from "react";
import RecipeList from "../../components/RecipeList/RecipeList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class RecipeListPage extends Component {
  state = {
    recipeList: [],
    whichRender: "viewAllRecipes",
  };

  renderCorrectComponent = () => {
    switch (this.state.whichRender) {
      case "":
        return "";
      case "":
        return "";
      default:
        return (
          <>
            <Header />
            <RecipeList />
            <Footer />
          </>
        );
    }
  };

  render() {
    return <>{this.renderCorrectComponent()}</>;
  }
}
