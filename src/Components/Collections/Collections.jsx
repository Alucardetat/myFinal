import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
    return (
        <div>
            <h1>Our Collections</h1>
            <p>Check out the <Link to="/product">Prsvr Kicks</Link> from our collection!</p>
        </div>
    );
};

export default Collections;