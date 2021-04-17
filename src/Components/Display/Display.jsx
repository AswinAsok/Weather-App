import React, { useState } from "react";

const Display = ({ location, search, setSearch }) => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const fetchdetails = () => {
    if (search && location.length > 0) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e872642d325a2c265cecf7fac7986a27`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          if(data.message) {
            setError(data.message);
          }
        });
    }
  };

  return (
    <div>
      {fetchdetails()}
      {console.log(weather)}
    </div>
  );
};

export default Display;
