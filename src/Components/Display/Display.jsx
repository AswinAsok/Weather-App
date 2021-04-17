import React from "react";
import "./Display.css";

const Display = ({ location, search }) => {
  return (
    <div className="">
      {(() => {
        if (search) {
          return (
            <div>
              <p>This is the location {location}</p>
              <p>This is check {search}</p>
              {console.log(search)}
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Display;
