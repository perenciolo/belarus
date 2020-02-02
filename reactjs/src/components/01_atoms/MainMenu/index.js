import React from "react";
import { Link } from "~/../routes";

const MainMenu = () => (
  <ul>
    <li>
      <Link to="/">
        <a className="nav-link">Home</a>
      </Link>
    </li>
    <li>
      <Link to="/recipes">
        <a className="nav-link">Recipes</a>
      </Link>
    </li>
  </ul>
);

export default MainMenu;
