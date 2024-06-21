package com.cadastroProdutos.cadastroprodutos.controller;

import com.cadastroProdutos.cadastroprodutos.entity.Produto;
import com.cadastroProdutos.cadastroprodutos.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/produtos")
public class ProdutoController {
    @Autowired
    public ProdutoService produtoService;

    @PostMapping
    public Produto save(@RequestBody Produto produto){
        return produtoService.salvarProduto(produto);
    }

    @GetMapping
    public List<Produto> getAllByValueOrder(){
        return produtoService.listarProdutosOrdemValor();
    }


}
