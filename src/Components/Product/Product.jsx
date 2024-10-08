import React, { useState } from 'react';
import productData from "../../assets/product.json"
import Quantity from '../Quantity/Quantity';
import './Product.css';

const Product = () => {
  const product = productData.product;

  const images = [
    "/assets/image-product-1.jpg",
    "/assets/image-product-2.jpg",
    "/assets/image-product-3.jpg",
    "/assets/image-product-4.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
  };

  return (
    <div className="product-page">
      <div className="image-section">
        {isFullScreen && (
          <div className="fullscreen-overlay" onClick={handleImageClick}>
            <img src={images[currentImageIndex]} alt="Full screen product" className="fullscreen-image" />
          </div>
        )}

        <div className="main-image-container">
          <img
            src={images[currentImageIndex]}
            alt="Main product"
            className="main-image"
            onClick={handleImageClick}
          />
          <button className="arrow left-arrow" onClick={handlePrevImage}>
            &#8249;
          </button>
          <button className="arrow right-arrow" onClick={handleNextImage}>
            &#8250;
          </button>
        </div>

        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.replace('.jpg', '-thumbnail.jpg')}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="details-section">
        <h2 className="company-name">Persevere</h2>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="price-info">
          {product.isOnSale ? (
            <>
              <div className="current-price">${(product.price - (product.price * product.saleOff / 100)).toFixed(2)}</div>
              <div className="discount-badge">{product.saleOff}%</div>
              <div className="original-price">${product.price.toFixed(2)}</div>
            </>
          ) : (
            <div className="current-price">${product.price.toFixed(2)}</div>
          )}
        </div>
        <div className="cart-controls">
          <div className="quantity-controls">
            <Quantity initialQuantity={0} />
          </div>
        </div>
      </div>
    </div>
  );
};
// Done

export default Product;
