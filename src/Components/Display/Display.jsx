import React from "react";
import "./Display.css";
import { useState } from "react";

const Display = ({ location, search, setSearch }) => {
  const [weather, setWeather] = useState({});
  const [checkdata, setCheckdata] = useState(false);


  const fetchweather = () => {

    fetch(`http://api.github.com/users/AswinAsok`)
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
        if (search && !checkdata) {
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
