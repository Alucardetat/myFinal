import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
   return (
      <nav className="navbar">
         <img className="logo" src="/assets/logo.svg" alt="logo" />
         <div className="mfg">
            <h1><Link to="welcome" className="welcomeLink">Welcome to Prsvr Kicks</Link></h1>
         </div>

         <ul className="navlinks">
            <li><Link to="/collections" className="link" >Collections</Link></li>
            <li><Link to="/women" className="link" >Women</Link></li>
            <li><Link to="/men" className="link" >Men</Link></li>
            <li><Link to="/contact" className="link" >Contact</Link></li>
            <li><Link to="/about" className="link" >About</Link></li>
         </ul>
      </nav>
   );
};

export default Nav;