const fs = require('fs');

const path = require('path');

const getChocolateList = async () => {
  const filePath = path.join(__dirname, 'files', 'chocolateList.json');
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    console.error(e);
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
