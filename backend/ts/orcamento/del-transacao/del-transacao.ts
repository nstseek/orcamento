import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { Transacao } from '../types';
import { delTransacaoRoutePath } from '../variables';
import DelTransacaoParameters from './types';

export function delTransacaoRoute(server: core.Express, scope: Orcamento) {
  server.delete(delTransacaoRoutePath, delTransacao2OrdCallback(scope));
}

export const delTransacao2OrdCallback = (scope: Orcamento) => (
  req: core.Request<DelTransacaoParameters>,
  res: core.Response
) => {
  let found = 0;
  scope.transacoes.forEach((transacao: Transacao, index: number) => {
    if (transacao.id === Number(req.params.id)) {
      found++;
      scope.transacoes.splice(index, 1);
    }
  });
  if (found === 0) {
    res.status(400);
    res.json({ message: 'This id was not found in this server' });
  } else {
    res.status(200);
    res.json({ message: `${found} item(s) deleted` });
  }
};
