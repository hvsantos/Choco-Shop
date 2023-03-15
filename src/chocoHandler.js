const fs = require('fs');

const { join } = require('path');

const getChocolateList = async () => {
  const path = './files/chocolateList.json';
  try {
    const content = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
};

const getAllChocolates = async () => {
  const chocolates = await getChocolateList();
  return chocolates.chocolates;
};

const getChocolateById = async (id) => {
  const chocolates = await getChocolateList();
  const chocolateById = chocolates.find(({ id: chocoId }) => chocoId === id);
  return chocolateById;
};

const getChocolateByBrandId = async (brandId) => {
  const chocolates = await getChocolateList();
  const chocolateByBrandId = chocolates
    .filter(({ brandId: chocoBrandId }) => chocoBrandId === brandId);
  return chocolateByBrandId;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrandId,
};
