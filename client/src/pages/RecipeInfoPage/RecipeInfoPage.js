/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import StorageIcon from "@material-ui/icons/Storage";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import productStyle from "assets/jss/theme/pages/productStyle.js";

// images
import axios from "axios";

const useStyles = makeStyles(productStyle);

export default function RecipeInfoPage() {
  const { recipeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchRecipeInfo();
  }, []);

  const fetchRecipeInfo = () => {
    if (recipeInfo.length === 0) {
      axios
        .get(`http://localhost:8080/recipes/${recipeId}`)
        .then((response) => {
          let copyRecipeInfo = recipeInfo;
          copyRecipeInfo.push(response.data);
          setRecipeInfo(copyRecipeInfo);
          setIsLoading(true);
        });
    }
  };

  if (isLoading) {
    const recipe = recipeInfo[0];
    console.log(recipe.instructions);
    const recipeNutrients = recipeInfo[0].nutrition.nutrients;
    return (
      <div className={classes.productPage}>
        <Header
          brand="Macro-Micro"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 100,
            color: "primary",
          }}
        />
        <Parallax
          image={require("assets/img/recipeInfoPage-bg.jpg")}
          filter="dark"
          className={classes.pageHeader}
        ></Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <Card profile plain>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={recipe.image} alt="..." />
                        <div className={classes.cardTitleAbsolute}></div>
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${recipe.image}})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </Card>
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>{recipe.title}</h2>
                  <h3 className={classes.mainPrice}>
                    Servings: {recipe.servings}
                  </h3>
                  <Accordion
                    active={0}
                    activeColor="primary"
                    collapses={[
                      {
                        title: "Ingredients",
                        content: (
                          <ul>
                            <li>
                              Storm and midnight-blue stretch cotton-blend
                            </li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two
                              front flap pockets, single vent, internal pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        ),
                      },
                      {
                        title: "Nutrition",
                        content: (
                          <ul>
                            <li>
                              {recipeNutrients[0].name}:{" "}
                              {recipeNutrients[0].amount}
                              {recipeNutrients[0].unit}
                            </li>
                            <li>
                              {recipeNutrients[1].name}:{" "}
                              {recipeNutrients[1].amount}
                              {recipeNutrients[1].unit}
                            </li>
                            <li>
                              {recipeNutrients[3].name}:{" "}
                              {recipeNutrients[3].amount}
                              {recipeNutrients[3].unit}
                            </li>
                            <li>
                              {recipeNutrients[8].name}:{" "}
                              {recipeNutrients[8].amount}
                              {recipeNutrients[8].unit}
                            </li>
                            <li>
                              {recipeNutrients[2].name}:{" "}
                              {recipeNutrients[2].amount}
                              {recipeNutrients[2].unit}
                            </li>
                            <li>
                              {recipeNutrients[5].name}:{" "}
                              {recipeNutrients[5].amount}
                              {recipeNutrients[5].unit}
                            </li>
                            <li>
                              {recipeNutrients[7].name}:{" "}
                              {recipeNutrients[7].amount}
                              {recipeNutrients[7].unit}
                            </li>
                          </ul>
                        ),
                      },
                      {
                        title: "Directions",
                        content: <>{recipe.instructions}</>,
                      },
                    ]}
                  />
                  <GridContainer className={classes.pullRight}>
                    <Link to="/vault">
                      <Button color="info" round>
                        <StorageIcon className={classes.icons} /> Go to your
                        Vault
                      </Button>
                    </Link>
                    <Button color="primary" round>
                      Discover more recipes
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href="" target="_blank" className={classes.block}>
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="" className={classes.block}>
                      Macro-News
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="" target="_blank" className={classes.block}>
                      Contact Us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>Macro-Micro</div>
            </div>
          }
        />
      </div>
    );
  } else {
    return <p>Page is currently loading . . .</p>;
  }
}
