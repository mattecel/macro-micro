import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// core components
import CardHeader from "components/Card/CardHeader.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Info from "components/Typography/Info.js";

import styles from "assets/jss/theme/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

export default function VaultCard(props) {
  const classes = useStyles();

  return (
    <GridItem xs={12} sm={4} md={4}>
      <Card profile plain>
        <CardHeader image plain>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={props.img} alt="..." />
            <div className={classes.cardTitleAbsolute}>{props.name}</div>
          </a>
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${props.img})`,
              opacity: "1",
            }}
          />
        </CardHeader>
        <CardBody plain>
          <Button color="google" justIcon round>
            {props.protein}
          </Button>
          <Button color="facebook" justIcon round>
            {props.carbs}
          </Button>
          <Button color="success" justIcon round>
            {props.fat}
          </Button>
          <br />
          <Info>
            <h6 className={classes.cardCategory}>{props.kcal} calories</h6>
          </Info>
        </CardBody>
        <CardFooter profile plain className={classes.justifyContentCenter}>
          <Link to={`/recipes/${props.id}`}>
            <Button color="info" justIcon>
              <VisibilityIcon />
            </Button>
          </Link>
          <Button
            onClick={() => props.handleDelete(props.id)}
            color="google"
            justIcon
          >
            <HighlightOffIcon />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
