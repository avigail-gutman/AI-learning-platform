import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function AdminDashboard({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/users`).then(res => setUsers(res.data));
    axios.get(`${API_URL}/categories`).then(res => setCategories(res.data));
    axios.get(`${API_URL}/subcategories`).then(res => setSubCategories(res.data));
  }, []);

  const fetchPrompts = () => {
    axios.get(`${API_URL}/admin/prompts`).then(res => setPrompts(res.data));
  };

  const getUserName = (id) => {
    const user = users.find(u => u.id === id);
    return user ? user.name : id;
  };

  const getCategoryName = (id) => {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.name : id;
  };

  const getSubCategoryName = (id) => {
    const sub = subCategories.find(sc => sc.id === id);
    return sub ? sub.name : id;
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={onLogout} style={{ float: 'left' }}>התנתק</button>
      <div style={{ marginTop: 32 }}>
        <button onClick={() => { setShowUsers(true); setShowPrompts(false); }} style={{ marginLeft: 50 }}>הצג את כל המשתמשים</button>
        <button onClick={() => { setShowPrompts(true); setShowUsers(false); fetchPrompts(); }} style={{ marginLeft: 50 }}>הצג את כל ה - prompts</button>
      </div>
      {showUsers && (
        <div style={{ marginTop: 24 }}>
          <h3>כל המשתמשים</h3>
          <ul>
            {users.map(u => (
              <li key={u.id}>{u.name} - {u.phone}</li>
            ))}
          </ul>
        </div>
      )}
      {showPrompts && (
        <div style={{ marginTop: 24 }}>
          <h3>כל ה- prompts</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#e2e8f0' }}>
                <th>משתמש</th>
                <th>קטגוריה</th>
                <th>תת-קטגוריה</th>
                <th>שאלה</th>
                <th>תשובה</th>
              </tr>
            </thead>
            <tbody>
              {prompts.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid #cbd5e1' }}>
                  <td>{getUserName(p.user_id)}</td>
                  <td>{getCategoryName(p.category_id)}</td>
                  <td>{getSubCategoryName(p.sub_category_id)}</td>
                  <td>{p.prompt}</td>
                  <td>{p.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;