import * as core from 'express-serve-static-core';
import { ExpressRequest } from '../../types';
import { Orcamento } from '../orcamento';
import { EnumObj } from '../types';
import { addCategoriaRoutePath } from '../variables';
import AddCategoriaBody from './types';

export function addCategoriaRoute(server: core.Express, scope: Orcamento) {
  server.post(addCategoriaRoutePath, addCategoria2OrdCallback(scope));
}

export const addCategoria2OrdCallback = (scope: Orcamento) => (
  req: ExpressRequest<AddCategoriaBody>,
  res: core.Response
) => {
  const newCategoria: EnumObj = {
    key: scope.actualKeyCat,
    value: req.body.nome
  };
  scope.categorias.push(newCategoria);
  res.status(200);
  res.json({ message: 'OK' });
};
