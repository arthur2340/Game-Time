const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/ratingsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definindo o schema do banco de dados
const ratingSchema = new mongoose.Schema({
  stars: Number,
});

// Criando o modelo para a coleção 'ratings'
const Rating = mongoose.model('Rating', ratingSchema);

// Rota para receber uma nova avaliação
app.post('/rating', async (req, res) => {
  const { stars } = req.body;

  try {
    const newRating = new Rating({ stars });
    await newRating.save();
    res.status(201).send('Avaliação registrada com sucesso.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao registrar a avaliação.');
  }
});

// Rota para buscar todas as avaliações
app.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar as avaliações.');
  }
});

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
