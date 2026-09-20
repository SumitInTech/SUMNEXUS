import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/Toast';
import '../styles/about.css';
import '../styles/admin.css';

const inputStyle = {
  padding: '12px',
  background: 'var(--bg-input)',
  border: '1px solid var(--border-color)',
  borderRadius: '6px',
  color: 'var(--text-primary)',
  fontSize: '15px',
  outline: 'none',
  width: '100%'
};

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', category: '', stock: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!user || user.role !== 'admin') {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast.error('Please select an image');
    
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    data.append('image', image);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { Authorization: `Bearer ${user.token}` },
        body: data
      });
      const responseData = await res.json();
      
      if (res.ok) {
        toast.success('Product created successfully!');
        navigate('/shop');
      } else {
        toast.error(responseData.message || 'Error creating product');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="about-container">
      <div className="about-card" style={{ textAlign: 'left' }}>
        <h2 style={{ color: '#f97316', marginBottom: '20px' }}>Add New Product</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Product Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} />
          <textarea placeholder="Description" required rows="4" onChange={(e) => setFormData({...formData, description: e.target.value})} style={{ ...inputStyle, resize: 'vertical' }} />
          <input type="number" placeholder="Price (₹)" required onChange={(e) => setFormData({...formData, price: e.target.value})} style={inputStyle} />
          <input type="text" placeholder="Category" required onChange={(e) => setFormData({...formData, category: e.target.value})} style={inputStyle} />
          <input type="number" placeholder="Stock Quantity" required onChange={(e) => setFormData({...formData, stock: e.target.value})} style={inputStyle} />
          
          <label className="file-input-wrapper">
            <input type="file" accept="image/*" required onChange={(e) => setImage(e.target.files[0])} />
            <span className="file-input-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              {image ? image.name : 'Click to upload product image'}
            </span>
          </label>

          <button type="submit" disabled={loading} className="btn" style={{ marginTop: '10px' }}>
            {loading ? 'Uploading & Creating...' : 'Publish Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
