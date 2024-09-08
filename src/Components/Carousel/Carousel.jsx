import React, { useState } from "react";
import "./Carousel.css"

const Carousel = () => {
    // Carousel functional component to display the images in a carousel.

    const [currentImage, setCurrentImage] = useState("/assets/image-product-1.jpg");

    const allImages = [
        { full: "/assets/image-product-1.jpg", thumb: "/assets/image-product-1-thumbnail.jpg" },
        { full: "/assets/image-product-2.jpg", thumb: "/assets/image-product-2-thumbnail.jpg" },
        { full: "/assets/image-product-3.jpg", thumb: "/assets/image-product-3-thumbnail.jpg" },
        { full: "/assets/image-product-4.jpg", thumb: "/assets/image-product-4-thumbnail.jpg" }
    ];

    const handleThumbnailClick = (image) => {
        setCurrentImage(image.full);
    };

    return (
        <div className="carouselContainer">
            {/* Main image */}
            <div className="mainImage">
                <img src={currentImage} alt="Main product image." />
            </div>
            {/* Thumbnails */}
            <div className="thumbnailsContainer">
                {allImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className="thumbnails"
                        onClick={() => handleThumbnailClick(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;