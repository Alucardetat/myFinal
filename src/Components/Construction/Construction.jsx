import React from "react";
import { Link } from "react-router-dom";
import "./Construction.css"

const Construction = () => {
    return (
        <div className="construction">
            <h1>This page is under construction.</h1>
            <p>We're working hard to get this page up and running. Check back soon!</p>
            <p>You can check out our <Link to="/product" className="link">latest kicks</Link> in the meantime.</p>
        </div>
    );
};

export default Construction;