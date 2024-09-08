import React, { useState } from "react";
import "./Quantity.css";

const Quantity = () => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="quantity">
            <button onClick={decrement}><img className="minus" src="/assets/icon-minus.svg" /></button>
            <span>{quantity}</span>
            <button onClick={increment}><img className="plus" src="/assets/icon-plus.svg" /></button>
            <button className="add-to-cart">Add to cart</button>
        </div>
    );
};

export default Quantity;