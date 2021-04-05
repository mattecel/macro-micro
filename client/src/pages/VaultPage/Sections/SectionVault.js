/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import VaultCard from "components/VaultCard/VaultCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Button from "components/CustomButtons/Button.js";
// styles
import vaultStyle from "assets/jss/theme/pages/vaultStyle";
import featuresStyle from "assets/jss/theme/pages/sectionsSections/featuresStyle.js";

const useFeatStyles = makeStyles(featuresStyle);
const useStyles = makeStyles(vaultStyle);

export default function SectionVault() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const [recipes, setRecipes] = useState([]);
  const [isDelete, setDelete] = useState(false);

  useEffect(() => {
    setRecipes(fixStrings());
    console.log("useEffect on SectionVault");
  }, [isDelete]);

  const handleDelete = (recipeId) => {
    setDelete(true);
    let index = recipes.findIndex((recipe) => recipe.id === recipeId) + 1;
    console.log(`this is the index for handle delete: ${index}`);
    localStorage.removeItem(index);
  };

  const handleExport = () => {
    let recipeIdArray = []
    recipes.forEach((recipe) => {
      recipeIdArray.push(recipe.id)
    })
    localStorage.setItem('grocerylist',JSON.stringify(recipeIdArray))
  }

  const fixStrings = () => {
    let storedRecipes = grabStoredRecipes();
    let vaultRecipes = storedRecipes.map((recipe) => JSON.parse(recipe));
    let sortedVaultRecipes = vaultRecipes.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );
    return sortedVaultRecipes;
  };

  const grabStoredRecipes = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  };

  const classes = useStyles();
  const featClasses = useFeatStyles();

  if (localStorage.length === 0) {
    return (
      <div className="cd-section">
        <div className={featClasses.container}>
          <div className={featClasses.features1}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={featClasses.mlAuto + " " + featClasses.mrAuto}
              >
                <h2 className={featClasses.title}>Your vault is empty!</h2>
                <br />
                <Link to="/recipes">
                  <Button color="primary" round>
                    Discover new recipes
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <br />
          <h2>Your favorites are all here!</h2>
          {isDelete ? (
            <SnackbarContent
              message={
                <span>
                  <b>SUCCESS:</b> The recipe has been removed from your vault.
                </span>
              }
              close
              color="success"
              icon={Check}
            />
          ) : (
            <></>
          )}

          <GridContainer>
            {recipes.map((recipe) => (
              <VaultCard
                key={recipe.id}
                id={recipe.id}
                name={recipe.title}
                img={recipe.image}
                kcal={recipe.calories}
                protein={recipe.protein}
                fat={recipe.fat}
                carbs={recipe.carbs}
                handleDelete={handleDelete}
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
                  <Link to="/grocery-list">
                    <Button onClick={() => handleExport()} color="primary" round>
                      Export to Grocery List
                    </Button>
                  </Link>
                </GridItem>
              </GridContainer>
            </div>
          </div>

          <br />
        </div>
      </div>
    );
  }
}
