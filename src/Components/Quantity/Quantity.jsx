import React, { useState } from "react"; // Importing React and the useState hook for managing component state.
import "./Quantity.css"; // Importing the CSS for the swag.

const Quantity = () => {
    // Quantity functional component managing quantity state.
    const [quantity, setQuantity] = useState(0);
    // useState hook to manage the 'quantity' state (initial value is 0).

    const increment = () => {
        setQuantity(quantity + 1);
        // Function to increase the quantity by 1 when the "+" button is clicked.
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            // Function to decrease the quantity by 1 when the "-" button is clicked.
        }
    };

    return (
        <div className="quantity">
            {/* Wrappaer div for quantity controls */}
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
            <button className="add-to-cart">Add to cart</button>
        </div>
    );
};

export default Quantity;