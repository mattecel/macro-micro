// imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames";
import { Link } from "react-router-dom";

// components
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem";
import RecipeCard from "components/RecipeCard/RecipeCard";

// materialui icons
import AddIcon from "@material-ui/icons/Add";
import StorageIcon from "@material-ui/icons/Storage";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/theme/pages/componentsSections/sectionCards.js";
import featuresStyle from "assets/jss/theme/pages/sectionsSections/featuresStyle.js";

const useFeatStyles = makeStyles(featuresStyle);
const useStyles = makeStyles(styles);

export default function SectionRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const featClasses = useFeatStyles();

  useEffect(() => {
    setIsLoading(true);
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) =>
        console.log(
          `Error: front-end axios request to fetch recipes on mount${err}`
        )
      );
  };
  const handleAdd = (recipeId) => {
    let copyRecipes = recipes;
    let newVaultRecipe = copyRecipes.find((recipe) => recipe.id === recipeId);
    newVaultRecipe["order"] = localStorage.length + 1;
    console.log(newVaultRecipe);
    localStorage.setItem(
      localStorage.length + 1,
      JSON.stringify(newVaultRecipe)
    );
  };

  if (isLoading) {
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <br />
          <h2>Choose your favorite!</h2>
          <GridContainer>
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                name={recipe.title}
                img={recipe.image}
                kcal={recipe.calories}
                protein={recipe.protein}
                fat={recipe.fat}
                carbs={recipe.carbs}
                handleAdd={handleAdd}
              />
            ))}
          </GridContainer>
          <div className={featClasses.container}>
            <div className={featClasses.features1}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={featClasses.mlAuto + " " + featClasses.mrAuto}
                >
                  <Link to="/vault">
                    <Button color="info" round>
                      <StorageIcon className={classes.icons} /> Go to your Vault
                    </Button>
                  </Link>
                  <Button color="primary" round>
                    <AddIcon className={classes.icons} /> Load More...
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          ;
        </div>
      </div>
    );
  } else {
    return <p> Loading... </p>;
  }
}
