import React, { useState, useEffect } from "react"; // Importing React - necessary
import "./Product.css"; // Importing CSS - necessary for ooo's and ahh's
import productData from "../../assets/product.json" 

const Product = () => {
    // Product functional component that renders the product and details.

    const [product, setProduct] = useState(null);

    // Fetch the product data
     useEffect(() => {
         setProduct(productData.product);
    }, []); // Empty dependancy array means it runs once after intial render.

    // if product data is still loading, render fallback
    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="product">
            {/* Wrapper for the entire product section */}
            {/* Use the product info from json */}
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            
            {/* Conditional rendering of sale price */}
            {product.isOnSale && (
                <p>
                    Sale Price: ${product.price - (product.price * product.saleOff) / 100}
                    ({product.saleOff}% Off)
                </p>
            )}
            
        </div>
    );
};

export default Product;