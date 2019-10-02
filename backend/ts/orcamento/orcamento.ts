import * as core from 'express-serve-static-core';
import nodeFS from 'fs';
import { orcamentoDataPath } from '../variables';
import { addCategoriaRoute } from './add-categoria/add-categoria';
import { addMetodoPagRoute } from './add-metodo-pag/add-metodo-pag';
import { addTransacaoRoute } from './add-transacao/add-transacao';
import { delCategoriaRoute } from './del-categoria/del-categoria';
import { delMetodoPagRoute } from './del-metodo-pag/del-metodo-pag';
import { delTransacaoRoute } from './del-transacao/del-transacao';
import { getDetalhesTransacaoRoute } from './detalhes-transacao/detalhes-transacao';
import { getEnumsRoute } from './get-enums/get-enums';
import { getTransacoesRoute } from './get-transacoes/get-transacoes';
import { EnumObj, OrcamentoBase, OrcamentoData, Transacao } from './types';

export class Orcamento implements OrcamentoBase {
  transacoes: Transacao[];
  categorias: EnumObj[];
  metodosPag: EnumObj[];
  actualId: number;
  actualKeyCat: number;
  actualKeyMet: number;

  constructor(server: core.Express) {
    this.setupEnvironmentVariables();
    this.setupRoutes(server);
  }

  setupEnvironmentVariables() {
    const jsonData: string = nodeFS.readFileSync(orcamentoDataPath, { encoding: 'utf8' });
    const data: OrcamentoData = JSON.parse(jsonData);
    this.categorias = data.categorias;
    this.transacoes = data.transacoes;
    this.transacoes.forEach((transacao: Transacao) => {
      transacao.data = new Date(transacao.data);
    });
    this.actualId = data.actualId;
    this.metodosPag = data.metodosPag;
    this.actualKeyCat = data.actualKeyCat;
    this.actualKeyMet = data.actualKeyMet;
  }

  setupRoutes(server: core.Express) {
    addTransacaoRoute(server, this);
    getDetalhesTransacaoRoute(server, this);
    getEnumsRoute(server, this);
    getTransacoesRoute(server, this);
    addCategoriaRoute(server, this);
    addMetodoPagRoute(server, this);
    delCategoriaRoute(server, this);
    delMetodoPagRoute(server, this);
    delTransacaoRoute(server, this);
  }
}
