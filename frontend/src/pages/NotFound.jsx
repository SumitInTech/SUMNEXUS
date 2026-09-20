import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin.css';

const NotFound = () => {
  return (
    <div className="page-404">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
};

export default NotFound;
