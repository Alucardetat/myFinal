import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
   return (
      <nav className="navbar">
         <img className="logo" src="/assets/logo.svg" alt="logo" />
         <div className="mfg">
            <h1>Welcome to Prsvr Kicks</h1>
         </div>

         <ul className="navlinks">
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
         </ul>
      </nav>
   );
};

export default Nav;