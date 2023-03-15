const chai = require('chai');

const chaiHttp = require('chai-http');

const sinon = require('sinon');

const fs = require('fs');

const { beforeEach } = require('mocha');

const app = require('../../src/app');
const { getAllChocolates } = require('../../src/chocoHandler');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Teste o caminho /chocolates', () => {
  let resp;
  beforeEach(async () => {
    sinon.stub(fs.promises, 'readFile')
    .resolves(mockFile);
    resp = await chai.request(app).get('/chocolates');
  });
  afterEach(() => {
    sinon.restore();
  });

  it('Retorna o status de 200', () => {
    expect(resp.status).to.be.equals(200);
  });
  it('Retorna a lista completa de chocolates', async () => {
    const chocolates = await getAllChocolates();
    expect(resp.body.chocolates).to.be.instanceof(Array);
    expect(resp.body.chocolates).to.deep.equal(chocolates);
  });
});
