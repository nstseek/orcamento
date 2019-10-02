import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as core from 'express-serve-static-core';
import { Server } from 'http';
import { Orcamento } from './orcamento/orcamento';

export interface OrcamentoServer {
  server: core.Express;
  serverHandler: Server;
  Express: typeof express;
  Cors: typeof cors;
  BodyParser: typeof bodyParser;
  ready: boolean;
  orcamentoHandler: Orcamento;
  port: number;
}

export interface ExpressRequest<BodyType> extends core.Request {
  body: BodyType;
}
