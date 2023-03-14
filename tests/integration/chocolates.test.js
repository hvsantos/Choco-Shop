const chai = require('chai');

const chaiHttp = require('chai-http');

const { beforeEach } = require('mocha');

const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

const chocoList = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

describe('Teste o caminho /chocolates', () => {
  let resp;

  beforeEach(async () => {
    resp = await chai.request(app).get('/chocolates');
  });

  it('Retorna o status de 200', () => {
    expect(resp.status).to.be.equals(200);
  });

  it('Retorna a lista completa de chocolates', async () => {
    expect(resp.body.chocolates).to.deep.equal(chocoList);
  });
});
