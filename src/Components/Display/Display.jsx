import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import "./Display.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "10%",
    marginBottom: "15%",
    borderRadius: "16px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "#FFFFFF", // 16:9
    borderColor: "#3F51B5",
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
  expcontent: {
    maxWidth: 345,
    backgroundColor: "#2D333B",
    color: "#ADBAC7",
    textAlign: "center",
  },
  dividercolorone: {
    background: "#1E2228",
  },
}));

const Display = ({ search, weather, location, error }) => {
  const classes = useStyles();

  return (
    <div className="DisplayContainer">
      {(() => {
        if (
          search &&
          location.length > 0 &&
          error == "200" &&
          weather.weather !=="undefined"
        ) {
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
                      image={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      title="Paella dish"
                    />

                    <CardContent className={classes.expcontent}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                      >
                        <div>Location: {weather.name}</div><br></br>
                        <div>Longitude: {weather.coord.lon}</div>
                        <div>Latitude: {weather.coord.lat}</div>
                      </Grid>
                      <br></br>
                      <Divider className={classes.dividercolorone} />
                      <br></br>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                      >
                        <div>
                          {weather.weather[0].main}:{" "}
                          {weather.weather[0].description}
                        </div>
                        <div>
                          Cloudliness: {weather.clouds.all}%
                        </div>
                      </Grid>
                      <br></br>

                      <Divider className={classes.dividercolorone} />
                    </CardContent>

                    <CardActions className={classes.expcontent}>
                      <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                      >
                        <div>
                          Temperature:&nbsp;<b>{weather.main.temp}</b>°C
                        </div>
                      </Grid>
                    </CardActions>

                    <CardContent className={classes.expcontent}>
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
                      <Divider className={classes.dividercolorone} />
                      <br></br>
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                      >
                        <div>
                          Humidity: <b>{weather.main.humidity}%</b>
                        </div>
                        <div>
                          Pressure: <b>{Math.round(weather.main.pressure)}mb</b>
                        </div>
                      </Grid>
                      <br></br>
                      <Divider className={classes.dividercolorone} />
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
                      <Divider className={classes.dividercolorone} />
                      <br></br>
                      <div>
                        <u>Wind</u>
                      </div>
                      <br></br>
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                      >
                        <div>
                          Speed: <b>{weather.wind.speed}m/s</b>
                        </div>

                        <div>
                          Direction: <b>{weather.wind.deg}deg</b>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            </div>
          );
        } else if (error === "404") {
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
                      image={`https://i.stack.imgur.com/6M513.png`}
                      title="404"
                    />

                    <CardContent className={classes.expcontent}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <div>
                          Entered location's weather condition is not found on
                          the server.
                        </div>
                      </Grid>
                      <br></br>
                      <Divider className={classes.dividercolorone} />
                      <br></br>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <div>
                          Please try again with some other nearby locations!
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            </div>
          );
        } else {
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
                      image={`https://avatars.githubusercontent.com/u/64626875?v=4`}
                      title="Hi I'm Aswin Asok"
                    />

                    <CardContent className={classes.expcontent}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        This is a React.js App that can be used to find the weather of your nearby location and it uses the OpenWeatherMap for fetching the details.
                        <br></br>
                      </Grid>
                      <br></br>
                      <Divider className={classes.dividercolorone} />
                      <br></br>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <a href="https://github.com/AswinAsok/Weather-App">
                          Star 🌟 This Repository
                        </a>
                      </Grid>
                      <br></br>
                      <Divider className={classes.dividercolorone} />
                      <br></br>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <a href="https://bio.fm/aswinasok">
                          Find me around the Web 🌎
                        </a>
                      </Grid>
                    </CardContent>
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
