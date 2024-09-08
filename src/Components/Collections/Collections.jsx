import React from "react";
import { Link } from "react-router-dom";
import "./Collections.css"

const Collections = () => {
    return (
        <div className="collections">
            <h1>Our Collections</h1>
            <p>Check out <Link to="/product" className="link">these fresh kicks</Link> from our collection!</p>
        </div>
    );
};

export default Collections;