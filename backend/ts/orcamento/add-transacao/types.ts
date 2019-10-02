export interface AddTransacaoBody {
  data: Date;
  titulo: string;
  metodoPag: number; // Essa prop aqui deve conter o index a ser acessado num objeto maior chamado "metodosPag"
  // que está presente na classe Orcamento
  detalhes: string;
  categoria: number; // Essa prop aqui deve conter o index a ser acessado num objeto maior chamado "categorias"
  // que está presente na classe Orcamento
  parcelas: number;
  valor: number;
}

export default AddTransacaoBody;
