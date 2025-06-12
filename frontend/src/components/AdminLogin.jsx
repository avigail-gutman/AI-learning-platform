import React, { useState } from 'react';

function AdminLogin({ onAdminLogin }) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // אפשר להחליף את הסיסמה כאן
    if (password === 'admin123') {
      onAdminLogin();
    } else {
      setMsg('סיסמת admin שגויה');
    }
  };

  return (
    <div style={{ marginTop: 24 }}>
      {!show && (
        <button onClick={() => setShow(true)}>כניסת admin</button>
      )}
      {show && (
        <form onSubmit={handleLogin} style={{ marginTop: 8 }}>
          <input
            type="password"
            placeholder="סיסמת admin"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">כניסה</button>
          <button type="button" onClick={() => setShow(false)} style={{ marginLeft: 8 }}>ביטול</button>
          <div style={{ color: 'red' }}>{msg}</div>
        </form>
      )}
    </div>
  );
}

export default AdminLogin;