import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/about.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch('/api/analytics', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setStats(data);
        } else {
          if (res.status === 401) {
            navigate('/login');
          }
          setStats({ totalOrders: 0, totalProducts: 0, totalUsers: 0, totalRevenue: 0 });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
  }, [user, navigate]);

  const cardStyle = {
    padding: '25px 20px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-sm)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    overflow: 'hidden',
    transition: 'background 0.3s ease, border-color 0.3s ease',
    minWidth: 0
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '5px' }}>
        <img src="/SumNexusLogo.png" alt="SUMNEXUS" style={{ height: '40px', width: '40px', borderRadius: '8px', objectFit: 'cover', filter: 'drop-shadow(0 0px 10px rgba(249, 115, 22, 0.3))' }} />
        <h2 style={{ margin: 0 }}>Admin Dashboard</h2>
      </div>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>Welcome back, <span style={{color: 'var(--text-primary)'}}>{user?.name}</span></p>
      
      {stats ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={cardStyle}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Total Orders</h4>
            <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '700', color: '#f97316', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stats.totalOrders}</div>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Total Products</h4>
            <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '700', color: '#f97316', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stats.totalProducts}</div>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Total Users</h4>
            <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '700', color: '#f97316', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stats.totalUsers}</div>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Total Revenue</h4>
            <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '700', color: '#f97316', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>₹{stats.totalRevenue.toLocaleString('en-IN')}</div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', margin: '50px 0', color: '#f97316' }}>Loading metrics...</div>
      )}

      <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', transition: 'background 0.3s ease, border-color 0.3s ease' }}>
        <h3 style={{ marginBottom: '25px', color: '#f97316' }}>Administrative Controls</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <button className="btn" onClick={() => navigate('/admin/add-product')}>+ Add Product</button>
          <button className="btn" onClick={() => navigate('/admin/products')} style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', boxShadow: 'none' }}>Manage Products</button>
          <button className="btn" onClick={() => navigate('/admin/orders')} style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', boxShadow: 'none' }}>Manage Orders</button>
          <button className="btn" onClick={() => navigate('/admin/users')} style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', boxShadow: 'none' }}>Users Directory</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
