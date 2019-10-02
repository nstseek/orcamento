import * as core from 'express-serve-static-core';
import nodeFS from 'fs';
import { ExpressRequest } from '../../types';
import { orcamentoDataPath } from '../../variables';
import { Orcamento } from '../orcamento';
import { EnumObj, OrcamentoData } from '../types';
import { addCategoriaRoutePath } from '../variables';
import AddCategoriaBody from './types';

export function addCategoriaRoute(server: core.Express, scope: Orcamento) {
  server.post(addCategoriaRoutePath, addCategoria2OrdCallback(scope));
}

export const addCategoria2OrdCallback = (scope: Orcamento) => (
  req: ExpressRequest<AddCategoriaBody>,
  res: core.Response
) => {
  let error = false;
  scope.categorias.forEach((categoria: EnumObj) => {
    if (req.body.nome === categoria.value) {
      res.status(400);
      res.json({ message: 'This name already exists' });
      error = true;
      return;
    }
  });
  if (error) {
    return;
  }
  const newCategoria: EnumObj = {
    key: scope.actualKeyCat,
    value: req.body.nome
  };
  scope.categorias.push(newCategoria);
  scope.actualKeyCat = scope.actualKeyCat + 1;
  const orcamento: OrcamentoData = {
    ...scope
  };
  nodeFS.writeFileSync(orcamentoDataPath, JSON.stringify(orcamento), { encoding: 'utf8' });
  res.status(200);
  res.json({ message: 'OK' });
};
