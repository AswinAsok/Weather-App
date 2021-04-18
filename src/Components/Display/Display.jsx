import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CardMedia from '@material-ui/core/CardMedia';

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
    console.log(`public/icons/${weather.weather[0].icon}@2x.png`)
    setExpanded(!expanded);
  };

  return (
    <div>
      {(() => {
        if (search && location.length > 0 && error == "false") {
          return (
            <div>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={`public/icons/${weather.weather[0].icon}@2x.png`}
                      title="Paella dish"
                    />

                    <CardContent>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <h1>{weather.weather[0].main}</h1>
                      </Grid>
                    </CardContent>

                    <CardActions disableSpacing>
                      Temperature:&nbsp;<b>{weather.main.temp}</b>°C
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
                            Feels like: <b>{weather.main.feels_like}°C</b>
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
                            Humidity: <b>{weather.main.humidity}%</b>
                          </div>
                          <div>
                            Pressure:{" "}
                            <b>{Math.round(weather.main.pressure)}mb</b>
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
              </Grid>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Display;
