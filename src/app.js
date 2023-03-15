const express = require('express');

const { getChocolateById, getAllChocolates, getChocolateByBrandId } = require('./chocoHandler');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'request recebido' }));

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolateById = await getChocolateById(Number(id));

  if (!chocolateById) return res.status(404).json({ message: 'Não Encontrado' });

  res.status(200).json({ chocolate: chocolateById });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolateByBrandId = await getChocolateByBrandId(Number(brandId));

  if (!chocolateByBrandId) return res.status(404).json({ message: 'Não Encontrado' });

  res.status(200).json({ chocolate: chocolateByBrandId });
});

module.exports = app;
