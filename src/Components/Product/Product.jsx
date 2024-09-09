import React, { useState } from 'react';
import productData from "../../assets/product.json"
import Quantity from '../Quantity/Quantity';
import './Product.css';

const Product = () => {
  const [mainImage, setMainImage] = useState("/assets/image-product-1.jpg");

  const product = productData.product;

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
        <h2 className="company-name">Persevere</h2>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="price-info">
          {product.isOnSale ? (
            <>
              <div className="current-price">${product.price - (product.price * product.saleOff / 100).toFixed(2)}</div>
              <div className="discount-badge">{product.saleOff}%</div>
              <div className="original-price">${product.price.toFixed(2)}</div>
            </>
          ) : (
            <div className="current-price">${product.price.toFixe(2)}</div>
          )}
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
