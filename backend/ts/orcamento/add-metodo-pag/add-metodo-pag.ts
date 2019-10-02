import * as core from 'express-serve-static-core';
import { ExpressRequest } from '../../types';
import { Orcamento } from '../orcamento';
import { addMetodoPagRoutePath } from '../variables';
import AddMetodoPagBody from './types';

export function addMetodoPagRoute(server: core.Express, scope: Orcamento) {
  server.post(addMetodoPagRoutePath, addMetodoPag2OrdCallback(scope));
}

export const addMetodoPag2OrdCallback = (scope: Orcamento) => (
  req: ExpressRequest<AddMetodoPagBody>,
  res: core.Response
) => {
  res.status(200);
  res.json({ message: 'OK' });
};
