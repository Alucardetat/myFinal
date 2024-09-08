import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to Prsvr Kicks!</h1>
            <p>Check out our latest collection <Link to="/product">here</Link>1</p>
        </div>
    );
};

export default Welcome;