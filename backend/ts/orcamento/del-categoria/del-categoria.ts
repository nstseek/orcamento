import * as core from 'express-serve-static-core';
import { Orcamento } from '../orcamento';
import { EnumObj } from '../types';
import { delCategoriaRoutePath } from '../variables';
import DelCategoriaParameters from './types';

export function delCategoriaRoute(server: core.Express, scope: Orcamento) {
  server.delete(delCategoriaRoutePath, delCategoria2OrdCallback(scope));
}

export const delCategoria2OrdCallback = (scope: Orcamento) => (
  req: core.Request<DelCategoriaParameters>,
  res: core.Response
) => {
  let found = 0;
  scope.categorias.forEach((categoria: EnumObj, index: number) => {
    if (categoria.key === Number(req.params.id)) {
      found++;
      scope.categorias.splice(index, 1);
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
