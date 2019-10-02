import * as core from 'express-serve-static-core';
import nodeFS from 'fs';
import { ExpressRequest } from '../../types';
import { orcamentoDataPath } from '../../variables';
import { Orcamento } from '../orcamento';
import { OrcamentoData, Transacao } from '../types';
import { addTransacaoRoutePath } from '../variables';
import AddTransacaoBody from './types';

export function addTransacaoRoute(server: core.Express, scope: Orcamento) {
  server.post(addTransacaoRoutePath, addTransacao2OrdCallback(scope));
}

export const addTransacao2OrdCallback = (scope: Orcamento) => (
  req: ExpressRequest<AddTransacaoBody>,
  res: core.Response
) => {
  const bodyData: AddTransacaoBody = req.body;
  const newTransacao: Transacao = {
    ...bodyData,
    id: scope.actualId
  };
  scope.transacoes.push(newTransacao);
  scope.actualId = scope.actualId + 1;
  const orcamento: OrcamentoData = {
    ...scope
  };
  nodeFS.writeFileSync(orcamentoDataPath, JSON.stringify(orcamento), { encoding: 'utf8' });
  res.status(200);
  res.json({ message: 'OK' });
};
