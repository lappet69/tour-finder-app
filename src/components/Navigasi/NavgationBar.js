import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoHome, IoSearchSharp } from "react-icons/io5";
const NavgationBar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-item">
        <Link to={"/"}>
          <IoHome className="nav-icon" />
          Home
        </Link>
      </div>
      <div className="nav-item">
        <Link to={"/find"}>
          <IoSearchSharp className="nav-icon" />
          Find
        </Link>
      </div>
    </div>
  );
};

export default NavgationBar;
