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
  let error = false;
  const bodyData: AddTransacaoBody = {
    ...req.body,
    data: new Date(req.body.data)
  };
  scope.transacoes.forEach((transacao: Transacao) => {
    if (
      bodyData.categoria === transacao.categoria &&
      Number(bodyData.data) === Number(transacao.data) &&
      bodyData.detalhes === transacao.detalhes &&
      bodyData.metodoPag === transacao.metodoPag &&
      bodyData.parcelas === transacao.parcelas &&
      bodyData.titulo === transacao.titulo &&
      bodyData.valor === transacao.valor
    ) {
      res.status(400);
      res.json({
        message:
          'This transaction already exists, if your intention is to duplicate, please, give a different title to it'
      });
      error = true;
      return;
    }
  });
  if (error) {
    return;
  }
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
