import { Avatar } from "@material-ui/core";
import {
  ExpandMore,
  Language as LanguageIcon,
  Search as SearchIcon,
} from "@material-ui/icons";

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>

        <LanguageIcon />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
