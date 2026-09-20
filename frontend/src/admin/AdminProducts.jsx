import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';
import Modal from '../components/Modal';
import '../styles/about.css';
import '../styles/admin.css';

const AdminProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null, name: '' });
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    };
    fetchProducts();
  }, []);

  const handleDelete = async () => {
    const res = await fetch(`/api/products/${deleteModal.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${user.token}` }
    });
    if (res.ok) {
      setProducts(products.filter(p => p._id !== deleteModal.id));
      toast.success('Product deleted successfully');
    }
    setDeleteModal({ open: false, id: null, name: '' });
  };

  return (
    <div className="about-container">
      <div className="about-card" style={{ textAlign: 'left' }}>
        <Modal
          isOpen={deleteModal.open}
          onClose={() => setDeleteModal({ open: false, id: null, name: '' })}
          onConfirm={handleDelete}
          title="Delete Product"
          message={`Are you sure you want to delete "${deleteModal.name}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          danger
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#f97316' }}>Manage Products</h2>
          <Link to="/admin/add-product" className="btn">+ Add Product</Link>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>STOCK</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{product._id.substring(0, 8)}...</td>
                  <td>{product.name}</td>
                  <td style={{ fontWeight: 600 }}>₹{product.price.toFixed(2)}</td>
                  <td><span style={{ padding: '2px 8px', background: 'var(--bg-input)', borderRadius: '4px', fontSize: '0.85rem' }}>{product.category}</span></td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="action-btns">
                      <Link to={`/admin/edit-product/${product._id}`} className="action-btn action-btn-edit">Edit</Link>
                      <button onClick={() => setDeleteModal({ open: true, id: product._id, name: product.name })} className="action-btn action-btn-delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
