import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Banner.css";
import SearchDates from "./SearchDates";

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <SearchDates />}
        
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch === true ? "Hide" : "Search Dates"}
        
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden games near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
