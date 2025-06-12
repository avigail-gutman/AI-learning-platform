import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function CategoryPrompt({ user }) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [subCategoryId, setSubCategoryId] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/categories`).then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    if (categoryId) {
      axios.get(`${API_URL}/subcategories?category_id=${categoryId}`)
        .then(res => setSubCategories(res.data));
    } else {
      setSubCategories([]);
      setSubCategoryId('');
    }
  }, [categoryId]);

  const handleCategoryClick = (id) => {
    setCategoryId(id);
    setSubCategoryId('');
    setResponse('');
    setMsg('');
  };

  const handleSubCategoryClick = (id) => {
    setSubCategoryId(id);
    setResponse('');
    setMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setResponse('');
    try {
      const res = await axios.post(`${API_URL}/prompts`, {
        user_id: user.id,
        category_id: categoryId,
        sub_category_id: subCategoryId,
        prompt
      });
      setResponse(res.data.response);
      setPrompt('');
    } catch {
      setMsg('שליחת ה- prompt נכשלה');
    }
  };

  return (
    <div>
      <h3>בחר קטגוריה:</h3>
      <div>
        {categories.map(c => (
          <button
            key={c.id}
            className={`category-btn${categoryId === c.id ? ' selected' : ''}`}
            onClick={() => handleCategoryClick(c.id)}
            type="button"
          >
            {c.name}
          </button>
        ))}
      </div>
      {categoryId && (
        <div style={{ marginTop: 12 }}>
          <h4>בחר תת-קטגוריה:</h4>
          {subCategories.map(sc => (
            <button
              key={sc.id}
              className={`sub-category-btn${subCategoryId === sc.id ? ' selected' : ''}`}
              onClick={() => handleSubCategoryClick(sc.id)}
              type="button"
            >
              {sc.name}
            </button>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        <textarea
          placeholder="הכנס שאלה או נושא ללמידה"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          required
          rows={3}
        />
        <button type="submit" disabled={!categoryId || !subCategoryId || !prompt}>
          שלח ל-AI
        </button>
      </form>
      {msg && <div style={{ color: 'red' }}>{msg}</div>}
      {response && (
        <div className="prompt-response">
          <strong>תשובת ה-AI:</strong><br />
          {response}
        </div>
      )}
    </div>
  );
}

export default CategoryPrompt;