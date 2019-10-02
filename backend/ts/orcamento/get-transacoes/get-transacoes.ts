import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { getTransacoesRoutePath } from '../variables';

export function getTransacoesRoute(server: core.Express, scope: Orcamento) {
  server.get(getTransacoesRoutePath, getTransacoes2OrdCallback(scope));
}
// @ts-ignore
export const getTransacoes2OrdCallback = (scope: Orcamento) => (req: core.Request, res: core.Response) => {
  res.status(200);
  res.json(scope.transacoes);
};
