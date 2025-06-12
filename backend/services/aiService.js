const axios = require('axios');

exports.sendPromptToAI = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY; 
  const endpoint = 'https://api.openai.com/v1/chat/completions'; 

  try {
    const response = await axios.post(
      endpoint,
      {
        model: 'gpt-3.5-turbo', 
        messages: [
          { role: 'user', content: prompt } 
        ],
        max_tokens: 500 
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`, 
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    return 'AI service unavailable';
  }
};