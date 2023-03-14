const chai = require('chai');

const chaiHttp = require('chai-http');

const { beforeEach } = require('mocha');

const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste o caminho /chocolates', () => {
  let resp;

  beforeEach(async () => {
    resp = await chai.request(app).get('/chocolates');
  });

  it('Retorna o status de 200', () => {
    expect(resp.status).to.be.equals(200);
  });
});
