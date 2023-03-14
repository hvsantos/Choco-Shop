const express = require('express');

const app = express();

const chocoList = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

app.get('/', (req, res) => res.status(200).json({ message: 'request recebido' }));

app.get('/chocolates', (req, res) => {
  res.status(200).json({ ...chocoList });
});

app.get('/chocolates/:id', (req, res) => {
  const { id } = req.params;
  const findById = chocoList.find(({ id: chocoId }) => chocoId === Number(id));

  if (!findById) return res.status(404).json({ message: 'Não Encontrado' });

  res.status(200).json({ ...findById });
});

app.get('/chocolates/brand/:brandId', (req, res) => {
  const { brandId } = req.params;
  const findByBrandId = chocoList
    .filter(({ brandId: chocoBrandId }) => chocoBrandId === Number(brandId));

  if (!findByBrandId) return res.status(404).json({ message: 'Não Encontrado' });

  res.status(200).json({ ...findByBrandId });
});

module.exports = app;
