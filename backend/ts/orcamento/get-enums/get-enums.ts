import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { getEnumsRoutePath } from '../variables';

export function getEnumsRoute(server: core.Express, scope: Orcamento) {
  server.get(getEnumsRoutePath, getEnums2OrdCallback(scope));
}

// @ts-ignore
export const getEnums2OrdCallback = (scope: Orcamento) => (req: core.Request, res: core.Response) => {
  const enums = {
    actualId: scope.actualId,
    actualKeyCat: scope.actualKeyCat,
    actualKeyMet: scope.actualKeyMet,
    categorias: scope.categorias,
    metodosPag: scope.metodosPag
  };
  res.status(200);
  res.json(enums);
};
