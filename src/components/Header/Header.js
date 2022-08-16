import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/reddit-icon-128.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-content">
          <img src={logo} alt="reddit logo" />
          <h3>minireddit</h3>
        </div>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Header;
