import React from "react";
import TextField from "@material-ui/core/TextField";

const Search = () => {
  return (
    <div>
      <TextField
        id="outlined-full-width"
        label="Search Weather"
        style={{marginLeft:"25%", marginTop:"2.5%", width: "50%" }}
        placeholder="Location"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </div>
  );
};

export default Search;
