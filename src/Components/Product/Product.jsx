import React, { useState } from 'react';
import Qauntity from "../Quantity/Quantity";
import './Product.css';
import Quantity from '../Quantity/Quantity';

const Product = () => {
  const [mainImage, setMainImage] = useState("/assets/image-product-1.jpg");

  const handleImageChange = (imagePath) => {
    setMainImage(imagePath);
  };

  return (
    <div className="product-page">
      <div className="image-section">
        <img src={mainImage} alt="Main product" className="main-image" />
        <div className="thumbnail-container">
          <img
            src="/assets/image-product-1-thumbnail.jpg"
            alt="Thumbnail 1"
            onClick={() => handleImageChange("/assets/image-product-1.jpg")}
            className="thumbnail"
          />
          <img
            src="/assets/image-product-2-thumbnail.jpg"
            alt="Thumbnail 2"
            onClick={() => handleImageChange("/assets/image-product-2.jpg")}
            className="thumbnail"
          />
          <img
            src="/assets/image-product-3-thumbnail.jpg"
            alt="Thumbnail 3"
            onClick={() => handleImageChange("/assets/image-product-3.jpg")}
            className="thumbnail"
          />
          <img
            src="/assets/image-product-4-thumbnail.jpg"
            alt="Thumbnail 4"
            onClick={() => handleImageChange("/assets/image-product-4.jpg")}
            className="thumbnail"
          />
        </div>
      </div>

      <div className="details-section">
        <h2 className="company-name">SNEAKER COMPANY</h2>
        <h1 className="product-title">Fall Limited Edition Sneakers</h1>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price-info">
          <div className="current-price">$125.00</div>
          <div className="discount-badge">50%</div>
          <div className="original-price">$250.00</div>
        </div>
        <div className="cart-controls">
          <div className="quantity-controls">
            <Quantity initialQauntity={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
