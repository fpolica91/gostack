import React from "react";
import posts from "../data";

const Header = () => {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Profile</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
