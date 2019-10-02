import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { EnumObj } from '../types';
import { delMetodoPagRoutePath } from '../variables';
import DelMetodoPagParameters from './types';

export function delMetodoPagRoute(server: core.Express, scope: Orcamento) {
  server.delete(delMetodoPagRoutePath, delMetodoPag2OrdCallback(scope));
}

export const delMetodoPag2OrdCallback = (scope: Orcamento) => (
  req: core.Request<DelMetodoPagParameters>,
  res: core.Response
) => {
  let found = 0;
  scope.metodosPag.forEach((metodoPag: EnumObj, index: number) => {
    if (metodoPag.key === Number(req.params.id)) {
      found++;
      scope.metodosPag.splice(index, 1);
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
