import { Component,  OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Produto } from '../models/produto.models';
import { ProdutosService } from '../services/produtos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  private produto : Produto
  public produtoForm: FormGroup
  public arrayProduto: any

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutosService
  ) {}


  ngOnInit(){

    this.produto = {id: Guid.createEmpty(), nome:"",validade:"",valor:0,quantidade:0}

    this.produtoForm = this.formBuilder.group
    ({
      id : [this.produto.id],
      nome: [this.produto.nome,Validators.required],
      validade: [this.produto.validade,Validators.required],
      valor: [this.produto.valor,Validators.required],
      quantidade: [this.produto.quantidade,Validators.required]
    })

      this.produtoService.listartodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }

  enviar(){
    if (this.produtoForm.valid){
      this.produtoService.inserir(this.produtoForm.value)
    }
  }
}
