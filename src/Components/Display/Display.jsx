import React from "react";
import "./Display.css";

const Display = ({ location, search, setSearch }) => {
  return (
    <div className="">
      {(() => {
        if (search) {
          return (
            <div>
              <p>This is the location {location}</p>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Display;
