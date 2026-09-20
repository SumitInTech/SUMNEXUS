import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/about.css';
import '../styles/admin.css';

const AdminUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/auth/users', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    };
    fetchUsers();
  }, [user]);

  return (
    <div className="about-container">
      <div className="about-card" style={{ textAlign: 'left' }}>
        <h2 style={{ color: '#f97316', marginBottom: '20px' }}>User Directory</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>JOINED</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u._id}>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{u._id.substring(0, 8)}...</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span style={{ 
                      background: u.role === 'admin' ? 'rgba(234,88,12,0.1)' : 'rgba(16,185,129,0.1)', 
                      color: u.role === 'admin' ? '#f97316' : '#10b981', 
                      padding: '4px 10px', 
                      borderRadius: '20px', 
                      fontSize: '0.8rem', 
                      fontWeight: 600 
                    }}>
                      {u.role.toUpperCase()}
                    </span>
                  </td>
                  <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
