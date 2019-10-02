import * as core from 'express-serve-static-core';

export class Orcamento {
  constructor(server: core.Express) {
    server.get('/');
  }
}
