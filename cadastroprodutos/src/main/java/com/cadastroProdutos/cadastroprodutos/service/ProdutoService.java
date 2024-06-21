package com.cadastroProdutos.cadastroprodutos.service;

import com.cadastroProdutos.cadastroprodutos.entity.Produto;
import com.cadastroProdutos.cadastroprodutos.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto salvarProduto(Produto produto){
        return produtoRepository.save(produto);
    }

    public List<Produto> listarProdutosOrdemValor(){
        return produtoRepository.findAllByOrderByValorAsc();
    }


}
