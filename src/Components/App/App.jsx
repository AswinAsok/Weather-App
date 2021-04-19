import Header from "../Header/Header";
import Display from "../Display/Display";
import "./App.css";
import Search from "../Search/Search";
import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  dividercolor: {
    background: "#2D333B",
},

}));

function App() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const classes = useStyles();

  const fetchdetails = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e872642d325a2c265cecf7fac7986a27&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log("Data Fetched");
        if (data.cod) {
          setError(data.cod);
          console.log(error)
        }
      });
  };

  return (
    <div className="App">
      <Header />
      <Search
        location={location}
        setLocation={setLocation}
        search={search}
        setSearch={setSearch}
        fetchdetails={fetchdetails}
      />
      <br></br>
      <Divider className={classes.dividercolor} />
      <Display
        search={search}
        weather={weather}
        location={location}
        error={error}
      />
      <Footer />

    </div>
  );
}

export default App;
