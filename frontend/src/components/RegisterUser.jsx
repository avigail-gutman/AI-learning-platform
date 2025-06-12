import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function RegisterUser({ onRegister, onBack }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.post(`${API_URL}/users`, { name, phone });
      setMsg('נרשמת בהצלחה!');
      setName('');
      setPhone('');
      if (onRegister) onRegister(res.data);
    } catch {
      setMsg('הרישום נכשל');
    }
  };

  return (
    <div>
      <h2>רישום משתמש חדש</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">הרשם</button>
      </form>
      <button onClick={onBack} style={{ marginTop: 8 }}>חזור</button>
      <div>{msg}</div>
    </div>
  );
}

export default RegisterUser;