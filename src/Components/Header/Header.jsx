import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CloudTwoToneIcon from "@material-ui/icons/CloudTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#0496FF",
    color: "#fffff",
  },
  text: {
    marginLeft: "5px",
  },
  logo: {
    margin: "0px",
    fontSize: "30px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="header-container">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <CloudTwoToneIcon className={classes.logo} />
          <Typography className={classes.text} variant="h5">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
