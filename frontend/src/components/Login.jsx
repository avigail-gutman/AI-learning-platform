import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.get(`${API_URL}/users`);
      const user = res.data.find(u => u.name === name && u.phone === phone);
      if (user) {
        onLogin(user);
      } else {
        setMsg('משתמש לא נמצא. ניתן להירשם כמשתמש חדש.');
      }
    } catch {
      setMsg('שגיאה בכניסה');
    }
  };

  return (
    <div>
      <h2>כניסת משתמש קיים</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="שם"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="טלפון"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <button type="submit">כניסה</button>
      </form>
      <div style={{ color: 'red' }}>{msg}</div>
    </div>
  );
}

export default Login;