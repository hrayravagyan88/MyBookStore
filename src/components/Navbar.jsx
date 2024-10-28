import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div>
      <div
        className="Banner u-bg-palette astro-3uwa3fdw"
        data-palette="racing-green"
      >
        <span
          className="Banner-message astro-3uwa3fdw"
          data-palette="racing-green"
        >
          <em className="Banner-code u-bg-palette" data-palette="mustard"></em>
        </span>
      </div>
      <header className="NewHeader">
        <div className="NewHeaderCointainer">
          <nav className="Nav-mainNav-bWFpb">
            <ul className="Nav-level1-bGV2Z">
              <li data-testid="nav-item-our-books">
                <span>Our books</span>
              </li>
              <li data-testid="nav-item-kids">
                <span>Kids</span>
              </li>
              <li data-testid="nav-item-adults">
                <span>Adults</span>
              </li>
              <li data-testid="nav-item-occasion">
                <span>Occasion</span>
              </li>
              <li data-testid="nav-item-theme">
                <span>Theme</span>
              </li>
              <li data-testid="nav-item-christmas">
                <a href="/personalized-books/occasions/christmas">Christmas</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
