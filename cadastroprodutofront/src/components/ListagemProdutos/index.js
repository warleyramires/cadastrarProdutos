// src/components/ListagemProdutos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CadastroProduto from '../CadastroProduto';

const ListagemProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [showCadastro, setShowCadastro] = useState(false);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
        const response = await axios.get('api/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
  };

  return (
    <div className="container mt-4">
      {showCadastro ? (
        <CadastroProduto onProdutoCadastrado={() => { fetchProdutos(); setShowCadastro(false); }} />
      ) : (
        <div>
          <button className="btn btn-success mb-3" onClick={() => setShowCadastro(true)}>Cadastrar Novo Produto</button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListagemProdutos;
