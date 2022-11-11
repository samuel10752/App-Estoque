import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Produto } from '../models/produto.models';
import { Storage } from '@ionic/storage-angular';
import { async } from '@angular/core/testing';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public produtos = [
    // {id : 1, nome : "Mãe", sobrenome: "", tipo: "celular", telefone : "9-8888-7777", email : ""},
    // {id : 2, nome :"Amor", sobrenome: "", tipo: "celular", telefone : "9-9191-8484", email : ""}
   ]

  constructor(
    private storage : Storage
  ) { }

  inserirProduto(dadosRecebidos : Produto){
    dadosRecebidos.id = Guid.create()

    this.storage.set(dadosRecebidos.id.toString(),JSON.stringify(dadosRecebidos))
    
  }

  async EnviarTodosProdutos(){ let produtoselecionado : Produto [] = []

    await this.storage.forEach((valor : string) => 
      {const produto : Produto = JSON.parse(valor); produtoselecionado.push(produto)})
    return produtoselecionado;
  }

  async FiltraId(id : string){
   return JSON.parse(await this.storage.get(id))
  }
  

  ExcluirProdutoId(id : string){
    this.storage.remove(id)
 
   } 

 
   AlterarProdutoid(id: string, dadosRecebidos: Produto){
     dadosRecebidos.id = Guid.parse(id)
     this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
   }

   recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.produtos.length + 1
    this.produtos.push(dadosRecebidos)
  }

  enviardadosid(id: number) {
    const produtoselecionado = this.produtos.filter(produto => produto.id === id)
    return  produtoselecionado[0]
  }
}
