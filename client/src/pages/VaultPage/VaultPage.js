/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

// sections
import SectionVault from "./Sections/SectionVault";

import vaultStyle from "assets/jss/theme/pages/vaultStyle";

const useStyles = makeStyles(vaultStyle);

export default function VaultPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Macro-Micro"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "primary",
        }}
      />

      <Parallax image={require("assets/img/vault-bg.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>The Vault</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionVault />
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
}
