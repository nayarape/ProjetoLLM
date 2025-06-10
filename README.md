# 🤖 LLM Backend API

Uma API REST simples para consultar modelos de linguagem (LLM) usando Node.js e Express, integrada com a API do Groq para respostas rápidas e gratuitas.

## 🚀 Funcionalidades

- ✅ API REST com Express.js
- ✅ Integração com Groq (LLM gratuito e rápido)
- ✅ Geração automática de resumos em português
- ✅ Sistema de health check
- ✅ Tratamento de erros robusto
- ✅ Busca automática por porta disponível

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM ou Yarn
- Conta gratuita no [Groq](https://console.groq.com)

## 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/llm-backend.git
cd llm-backend
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Crie um arquivo .env na raiz do projeto
GROQ_API_KEY=sua_chave_do_groq_aqui
```

4. **Obtenha sua chave da API:**
   - Acesse [console.groq.com](https://console.groq.com/keys)
   - Faça cadastro gratuito
   - Crie uma nova API key
   - Cole no arquivo `.env`

## 🏃‍♂️ Como executar

```bash
# Desenvolvimento
npm start
# ou
node index.js
```

O servidor irá iniciar automaticamente em uma porta disponível (geralmente 8080) e exibirá:

```
✅ Servidor rodando em http://localhost:8080
📋 Endpoints disponíveis:
   - GET  http://localhost:8080/health - Verificar status
   - POST http://localhost:8080/ask - Para fazer perguntas
```



## 🧪 Testando a API



### Com Postman:
1. **Health Check:**
   - Método: `GET`
   - URL: `http://localhost:8080/health`

2. **Consulta LLM:**
   - Método: `POST`
   - URL: `http://localhost:8080/ask`
   - Headers: `Content-Type: application/json`
   - Body: `{"info": "Sua pergunta aqui"}`

## 📁 Estrutura do projeto

```
llm-backend/
├── index.js          # Servidor Express principal
├── llmClient.js      # Cliente para API do Groq
├── prompt.js         # Construção de prompts
├── .env              # Variáveis de ambiente
├── package.json      # Dependências do projeto
└── README.md         # Este arquivo
```

## 🔧 Tecnologias utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Axios** - Cliente HTTP
- **Groq API** - Modelo de linguagem (Llama3)
- **dotenv** - Gerenciamento de variáveis de ambiente


## 🐛 Solução de problemas

### Erro de porta ocupada
O servidor encontra automaticamente uma porta disponível. Se necessário, force uma porta específica:
```bash
PORT=3001 node index.js
```

### Erro 401 (Unauthorized)
Verifique se a chave da API está correta no arquivo `.env`:
```bash
GROQ_API_KEY=gsk_sua_chave_aqui
```

### Erro 400 (Bad Request)
Verifique se o JSON está bem formatado e contém o campo `info`:
```json
{"info": "Sua pergunta aqui"}
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request


