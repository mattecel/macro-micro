import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/theme/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

export default function SectionCards(props) {
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <GridItem xs={12} sm={6} md={6} lg={4}>
      <div className={classes.rotatingCardContainer}>
        <Card background className={classes.cardRotate}>
          <div
            className={classes.front + " " + classes.wrapperLightBackground}
            style={{
              backgroundImage: `url(${props.img})`,
            }}
          >
            <CardBody background className={classes.cardBodyRotate}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}></a>
            </CardBody>
          </div>
          <div
            className={classes.back + " " + classes.wrapperBackground}
            style={{
              backgroundImage: `url(${props.img})`,
            }}
          >
            <CardBody background className={classes.cardBodyRotate}>
              <h5 className={classes.cardTitleWhite}>
                You can add or view this recipe below
              </h5>
              <p className={classes.cardDescriptionWhite}>
                {props.kcal} calories
              </p>
              <div className={classes.textCenter}>
                <Button
                  onClick={() => props.handleAdd(props.id)}
                  round
                  justIcon
                  color="success"
                >
                  <AddIcon />
                </Button>
                <Link to={`/recipes/${props.id}`}>
                  <Button round justIcon color="info">
                    <VisibilityIcon />
                  </Button>
                </Link>
              </div>
            </CardBody>
          </div>
        </Card>
      </div>
      <br />
      <CardFooter
        profile
        plain
        className={classes.justifyContentCenter + " " + classes.textCenter}
      >
        <h4 className={classes.cardTitle}>{props.name}</h4>
      </CardFooter>
      <CardFooter profile plain className={classes.justifyContentCenter}>
        <Button color="google" justIcon round>
          {props.protein}
        </Button>
        <Button color="facebook" justIcon round>
          {props.carbs}
        </Button>
        <Button color="success" justIcon round>
          {props.fat}
        </Button>
      </CardFooter>
    </GridItem>
  );
}
