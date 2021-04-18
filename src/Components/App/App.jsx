import Header from "../Header/Header";
import Display from "../Display/Display";
import "./App.css";
import Search from "../Search/Search";
import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";

function App() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const fetchdetails = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e872642d325a2c265cecf7fac7986a27&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setError("false");
        console.log("Data Fetched");
        if (data.message) {
          setError(data.message);
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
      <Divider />
      <Display
        search={search}
        weather={weather}
        location={location}
        error={error}
      />
    </div>
  );
}

export default App;
