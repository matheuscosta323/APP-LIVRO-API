const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const livroRoutes = require('./routes/livroRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect('mongodb://localhost:27017/livrosdb')
  .then(() => console.log('MongoDB conectado com sucesso'))
  .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

// Rotas
app.use('/api/livros', livroRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Livros funcionando!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
