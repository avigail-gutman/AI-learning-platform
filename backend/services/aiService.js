const axios = require('axios');

exports.sendPromptToAI = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY; // לוקח את המפתח מה-ENV
  const endpoint = 'https://api.openai.com/v1/chat/completions'; // כתובת ה-API

  try {
    const response = await axios.post(
      endpoint,
      {
        model: 'gpt-3.5-turbo', // שם המודל (אפשר גם gpt-4 אם יש לך הרשאה)
        messages: [
          { role: 'user', content: prompt } // שולח את ה-prompt של המשתמש
        ],
        max_tokens: 500 // מגביל את אורך התשובה
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`, // מזהה את עצמך מול OpenAI
          'Content-Type': 'application/json'
        }
      }
    );
    // מחזיר את התשובה של ה-AI
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    return 'AI service unavailable';
  }
};