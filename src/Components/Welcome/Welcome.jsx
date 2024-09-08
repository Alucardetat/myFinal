import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"

const Welcome = () => {
    return (
        <div className="welcome">
            <h1>Welcome to Prsvr Kicks!</h1>
            <p>Check out our latest collection <Link to="/product" className="link">here</Link>!</p>
        </div>
    );
};

export default Welcome;