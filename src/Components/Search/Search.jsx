import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import './Search.css'

const Search = () => {
  return (
    <div className="Search-container">
      <Grid spacing={3}>
        <TextField
          id="outlined-full-width"
          label="Search Weather"
          style={{marginTop: "10%", width: "70%" }}
          placeholder="Location"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <Button variant="outlined" color="primary" style={{ marginTop: "10%", marginLeft: "5px", padding:"13px"}} size="large">
          Search
        </Button>
      </Grid>
    </div>
  );
};

export default Search;
