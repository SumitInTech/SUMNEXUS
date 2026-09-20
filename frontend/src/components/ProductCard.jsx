import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';
import '../styles/admin.css';

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card">
      {!imageLoaded && <div className="image-skeleton"></div>}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <Link to={`/product/${product._id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
