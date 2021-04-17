import React from "react";
import "./Display.css";
import { useState } from "react";

const Display = ({ location, search, setSearch }) => {
  const [weather, setWeather] = useState({});
  const [checkdata, setCheckdata] = useState(false);


  const fetchweather = () => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e872642d325a2c265cecf7fac7986a27`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setCheckdata(true);
        if(data.message){
          setCheckdata(false);
        }
      });
  };

  return (
    <div className="">
      {(() => {
        if (search) {
          return <div>
              {fetchweather()}
              {console.log(weather)}
          </div>;
        }
      })()}
    </div>
  );
};

export default Display;
