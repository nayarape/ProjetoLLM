import express from 'express';
import { buildPrompt } from './prompt.js';
import { queryLLM } from './llmClient.js';

const app = express();
app.use(express.json());

app.post('/ask', async (req, res) => {
  const { info } = req.body;

  if (!info) {
    return res.status(400).json({ error: 'Campo "info" é obrigatório.' });
  }

  try {
    const prompt = buildPrompt(info);
    console.log('Enviando prompt:', prompt);
    
    const answer = await queryLLM(prompt);
    console.log('Resposta recebida:', answer);
    
    res.json({ answer });
  } catch (error) {
    console.error('Erro ao consultar LLM:', error.message);
    res.status(500).json({ 
      error: 'Erro ao consultar LLM',
      details: error.message 
    });
  }
});

// Endpoint de teste
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 8080;

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`✅ Servidor rodando em http://localhost:${port}`);
    console.log('📋 Endpoints disponíveis:');
    console.log(`   - GET  http://localhost:${port}/health - Verificar status`);
    console.log(`   - POST http://localhost:${port}/ask - Para fazer perguntas`);
    console.log('\n🚀 Servidor pronto para receber requisições!');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  Porta ${port} ocupada, tentando próxima...`);
      startServer(port + 1);
    } else {
      console.error('❌ Erro no servidor:', err.message);
      process.exit(1);
    }
  });
}

startServer(PORT);