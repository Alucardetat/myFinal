import React from "react";
import { Link } from "react-router-dom";
import "./Collections.css"

const Collections = () => {
    return (
        <div className="collections">
            <h1>Our Collections</h1>
            <p>Check out the <Link to="/product" className="link">Prsvr Kicks</Link> from our collection!</p>
        </div>
    );
};

export default Collections;