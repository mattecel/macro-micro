/*eslint-disable*/
import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
// core components
import Table from "components/Table/Table";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import groceryListPageStyle from "assets/jss/theme/pages/groceryListPageStyle";

import image from "assets/img/groceries-bg.jpg";

const useStyles = makeStyles(groceryListPageStyle);

export default function GroceryListPage({ ...rest }) {
  const [isLoading, setIsLoading] = useState(false);
  const [groceryList, setGroceryList] = useState([]);


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  const fillButtons = [
    { color: "success", icon: EditIcon },
    { color: "danger", icon: CloseIcon },
  ].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Macro-Micro"
        links={<HeaderLinks dropdownHoverColor="primary" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Your Grocery List</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
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
    </div>
  );
}
