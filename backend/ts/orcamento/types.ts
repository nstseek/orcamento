import { AddTransacaoBody } from './add-transacao/types';

export type OrcamentoBase = OrcamentoData;

export interface Transacao extends AddTransacaoBody {
  id: number;
}

// export enum MetodoPagamento {
//   'Dinheiro' = 1,
//   'Cartão de débito',
//   'Cartão de crédito Banrisul',
//   'Cartão de crédito Itaú',
//   'Cartão de crédito Americanas',
//   'Cartão VR',
//   'Gasto planejado'
// }

export interface EnumObj {
  key: number;
  value: string;
}

export interface OrcamentoData {
  transacoes: Transacao[];
  categorias: EnumObj[];
  metodosPag: EnumObj[];
  actualId: number;
  actualKeyCat: number;
  actualKeyMet: number;
}
