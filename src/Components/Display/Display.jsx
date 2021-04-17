import React, { useState } from "react";

const Display = ({search, weather, location, error}) => {
  

  return (
    <div>
       {(() => {
        if (search && location.length > 0 && error=="false") {
          return (
            <div>
              <p>{weather.coord.lon}</p>
            </div>
          )
        }
      })()}
    </div>
  );
};

export default Display;
