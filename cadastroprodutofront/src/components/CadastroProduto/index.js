import React, {useState} from "react";
import axios from "axios";


export default function CadastroProduto({ onProdutoCadastrado }){

    const[nome, setNome] = useState("");
    const[descricao, setDescricao] = useState("");
    const[valor, setValor] = useState("");
    const[disponivel, setDisponivel] = useState(true);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const produto = {
            nome,
            descricao,
            valor: parseFloat(valor),
            disponivel,
        }

        try {
            await axios.post('api/produtos', produto);
            onProdutoCadastrado();
          } catch (error) {
            console.error("There was an error creating the product!", error);
          }
    }

    return(
        <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome do Produto</label>
          <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição do Produto</label>
          <input type="text" className="form-control" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor do Produto</label>
          <input type="number" className="form-control" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Disponível para Venda</label>
          <select className="form-select" value={disponivel} onChange={(e) => setDisponivel(e.target.value === 'true')}>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
    )


}
