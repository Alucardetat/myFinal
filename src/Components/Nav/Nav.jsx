import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {

   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <nav className="navbar">
         <div className="menu" onClick={toggleMenu}>
            <img className="menuIcon" src="/assets/icon-menu.svg" alt="menu" />
         </div>

         <div className="mfg">
            <h1><Link to="/" className="welcomeLink"><img className="logo" src="/assets/logo.svg" alt="logo" /></Link></h1>
         </div>

         <ul className={`navlinks ${menuOpen ? "active" : ""}`}>
            <li><Link to="/collections" className="link" >Collections</Link></li>
            <li><Link to="/women" className="link" >Women</Link></li>
            <li><Link to="/men" className="link" >Men</Link></li>
            <li><Link to="/contact" className="link" >Contact</Link></li>
            <li><Link to="/about" className="link" >About</Link></li>
            <li><Link to="cart" className="cart"><img className="cartIcon" src="/assets/icon-cart.svg" alt="cart" /></Link></li>
            <li><Link to="cart" className="user"><img className="userIcon" src="/assets/image-avatar.png" alt="user" /></Link></li>
         </ul>
      </nav>
   );
};

export default Nav;