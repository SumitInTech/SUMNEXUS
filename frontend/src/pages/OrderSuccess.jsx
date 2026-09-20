import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const OrderSuccess = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#10b981' }}>Payment Successful!</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '40px' }}>
          Thank you for your order. We have securely received your payment and will process your shipment shortly.
        </p>
        <Link to="/shop" className="btn">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
