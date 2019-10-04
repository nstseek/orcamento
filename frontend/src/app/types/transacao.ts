export interface Transacao {
  data: Date;
  titulo: string;
  metodoPag: number;
  detalhes: string;
  categoria: number;
  parcelas: number;
  valor: number;
  id: number;
}
