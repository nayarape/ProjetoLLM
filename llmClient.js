import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function queryLLM(prompt) {
  console.log('🔑 API Key configurada:', process.env.GROQ_API_KEY ? 'SIM' : 'NÃO');
  console.log('🔑 Primeiros caracteres da chave:', process.env.GROQ_API_KEY?.substring(0, 10) + '...');
  console.log('📝 Prompt enviado:', prompt);
  
  const payload = {
    model: 'llama3-8b-8192',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
    temperature: 0.7
  };
  
  console.log('📦 Payload enviado:', JSON.stringify(payload, null, 2));
  
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      payload,
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('🚨 Status do erro:', error.response?.status);
    console.error('🚨 Dados do erro:', JSON.stringify(error.response?.data, null, 2));
    console.error('🚨 Headers da resposta:', error.response?.headers);
    throw new Error(`Erro na consulta LLM: ${error.response?.status || error.message}`);
  }
}