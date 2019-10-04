import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { Transacao } from '../types';
import { getTransacoesRoutePath } from '../variables';
import GetTransacParameters from './types';

export function getTransacoesRoute(server: core.Express, scope: Orcamento) {
  server.get(getTransacoesRoutePath, getTransacoes2OrdCallback(scope));
}
// @ts-ignore
export const getTransacoes2OrdCallback = (scope: Orcamento) => (
  req: core.Request<GetTransacParameters>,
  res: core.Response
) => {
  let transacsPeriod: Transacao[];
  const data = new Date(Number(req.params.year), Number(req.params.month) - 1);
  transacsPeriod = scope.transacoes.filter(
    (transacao: Transacao) =>
      transacao.data.getFullYear() === data.getFullYear() && transacao.data.getMonth() === data.getMonth()
  );
  res.status(200);
  res.json(transacsPeriod);
};
