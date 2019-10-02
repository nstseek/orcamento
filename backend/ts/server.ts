import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as core from 'express-serve-static-core';
import { Server } from 'http';
import { Orcamento } from './orcamento/orcamento';
import { OrcamentoServer } from './types';
import { port } from './variables';

export class NodeServer implements OrcamentoServer {
  server: core.Express;
  serverHandler: Server;
  Express: typeof express;
  Cors: typeof cors;
  BodyParser: typeof bodyParser;
  ready: boolean;
  orcamentoHandler: Orcamento;
  port: number;

  constructor(expressLib = express, bodyParserLib = bodyParser, corsLib = cors, serverPort = port) {
    this.Express = expressLib;
    this.BodyParser = bodyParserLib;
    this.Cors = corsLib;
    this.port = serverPort;
    this.ready = false;
    this.server = this.Express();
    this.serverHandler = this.server.listen(this.port, this.listenCallback);
    this.orcamentoHandler = new Orcamento(this.server);
  }

  listenCallback(err: string) {
    if (err) {
      this.throwError(err);
    } else {
      console.log(`Server listening on port ${this.port}`);
      this.ready = true;
    }
  }

  throwError(err: string) {
    throw new Error(err);
  }
}
