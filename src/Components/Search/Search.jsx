import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Search.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2D333B",
    borderColor: "#2D333B"
  },
  input: {
    color: "white",
  },
  label: {
    color: "#747F89"
  }
}));

const Search = ({ location, setLocation, search, setSearch, fetchdetails,error, setError }) => {
  const classes = useStyles();
  return (
    <div className="Search-container">
      <Grid>
        <TextField
          id="outlined-full-width"
          label="Search Weather"
          style={{ marginTop: "10%", width: "70%" }}
          placeholder="Location"
          margin="normal"
          InputLabelProps={{
            shrink: true,
            className: classes.label,
          }}
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
            if (search) {
              setSearch(false); 
              setError("");
            }
          }}
          variant="outlined"
        />

        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setSearch(true);
            fetchdetails();
          }}
          style={{ marginTop: "10%", marginLeft: "5px", padding: "13px" }}
          size="large"
        >
          Search
        </Button>
      </Grid>
    </div>
  );
};

export default Search;
