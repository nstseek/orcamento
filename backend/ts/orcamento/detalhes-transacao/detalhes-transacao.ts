import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { Transacao } from '../types';
import { detalhesTransacaoRoutePath } from '../variables';
import DetalhesTransacaoParameters from './types';

export function getDetalhesTransacaoRoute(server: core.Express, scope: Orcamento) {
  server.get(detalhesTransacaoRoutePath, getDetalhesTransacao2OrdCallback(scope));
}

export const getDetalhesTransacao2OrdCallback = (scope: Orcamento) => (
  req: core.Request<DetalhesTransacaoParameters>,
  res: core.Response
) => {
  const transacaoFound = scope.transacoes.filter((transacao: Transacao) => transacao.id === Number(req.params.id));
  if (transacaoFound) {
    res.status(200);
    res.json(transacaoFound);
  } else {
    res.status(400);
    res.json({ message: 'This transaction id was not found on this server' });
  }
};
