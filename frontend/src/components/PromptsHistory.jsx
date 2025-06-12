import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function PromptsHistory({ userId }) {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    if (userId) {
      axios.get(`${API_URL}/prompts/history/${userId}`)
        .then(res => setPrompts(res.data));
    }
  }, [userId]);

  return (
    <div>
      <h2>היסטוריית למידה</h2>
      <ul>
        {prompts.map(p => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <div><strong>שאלה:</strong> {p.prompt}</div>
            <div><strong>תשובה:</strong> {p.response}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromptsHistory;