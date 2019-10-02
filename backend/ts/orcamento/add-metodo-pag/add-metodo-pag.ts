import * as core from 'express-serve-static-core';
import nodeFS from 'fs';
import { ExpressRequest } from '../../types';
import { orcamentoDataPath } from '../../variables';
import { Orcamento } from '../orcamento';
import { EnumObj, OrcamentoData } from '../types';
import { addMetodoPagRoutePath } from '../variables';
import AddMetodoPagBody from './types';

export function addMetodoPagRoute(server: core.Express, scope: Orcamento) {
  server.post(addMetodoPagRoutePath, addMetodoPag2OrdCallback(scope));
}

// ver se nome ja n existe

export const addMetodoPag2OrdCallback = (scope: Orcamento) => (
  req: ExpressRequest<AddMetodoPagBody>,
  res: core.Response
) => {
  const newMetodoPag: EnumObj = {
    key: scope.actualKeyMet,
    value: req.body.nome
  };
  scope.metodosPag.push(newMetodoPag);
  scope.actualKeyMet = scope.actualKeyMet + 1;
  const orcamento: OrcamentoData = {
    ...scope
  };
  nodeFS.writeFileSync(orcamentoDataPath, JSON.stringify(orcamento), { encoding: 'utf8' });
  res.status(200);
  res.json({ message: 'OK' });
};
