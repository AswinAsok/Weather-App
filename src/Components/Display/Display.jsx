import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Display = ({ search, weather, location, error }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {(() => {
        if (search && location.length > 0 && error == "false") {
          return (
            <div>
              <Card className={classes.root}>
                <CardContent>
                  <h2>{weather.weather[0].main}</h2>
                </CardContent>

                <CardActions disableSpacing>
                  {Math.round(weather.main.temp)}°C
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <div>
                        Feels like: <b>{weather.main.feels_like}</b>
                      </div>
                    </Grid>
                    <br></br>
                    <Divider />
                    <br></br>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <div>
                        Humidity:<b>{weather.main.humidity}%</b>
                      </div>
                      <div>
                        Pressure:<b>{Math.round(weather.main.pressure)}mb</b>
                      </div>
                    </Grid>
                    <br></br>
                    <Divider />
                    <br></br>
                    <Grid
                      container
                      direction="column"
                      justify="space-around"
                      alignItems="center"
                    >
                      <div>
                        Visiblity: <b>{weather.visibility / 1000}km</b>
                      </div>
                    </Grid>
                    <br></br>
                    <Divider />
                    <br></br>
                    
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      
                      <div>
                        Wind: <b>{weather.wind.speed}m/s</b>
                      </div>
                      <div>
                        Wind Direction: <b>{weather.wind.deg}deg</b>
                      </div>
                    </Grid>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Display;
