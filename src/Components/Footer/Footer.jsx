import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#2D333B",
    color: "#ADBAC7",
    textAlign: "center",
  },
  text: {
    marginLeft: "5px",
    textAlign: "center",
  },
  logo: {
    margin: "0px",
    fontSize: "30px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="footer-container">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className={classes.text}>Made with Passion 💙 By Aswin Asok</div>
            <div className={classes.text}><a href="https://github.com/AswinAsok/Weather-App">Star 🌟 This Repository</a></div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
