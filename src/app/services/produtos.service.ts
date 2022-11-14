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

  // Aqui recebe todos os dados que são passados no formulario principal e manda para o banco
  InserirProduto(dadosRecebidos: Produto){
    // cria um id novo pro item e sobbe ele atraves do metodo set
    dadosRecebidos.id = Guid.create()
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  // Aqui cria um vetor vazio e depois popula ele com todos os valores por ID que está no storage
  ListarTodosContatos(){
    let arrayProdutos : Produto [] = []
    this.storage.forEach((valor : string) => {const produto : Produto = JSON.parse(valor);arrayProdutos.push(produto)})
    return arrayProdutos
  }

  // Essa aqui especifica o Id passado pelo usuario pra vc mostrar os detalhes **
  async FiltraProdutoId(id : string){
    return JSON.parse(await this.storage.get(id))
  }

  // Func de compra/venda/update ele pega o valor passado e substitui o valor que está no banco, n deveria ser assim mas n consegui pensar em algo pra fazer isso
  ComprarProduto(id: string, dadosRecebidos : Produto){
    this.ListarTodosContatos()

    dadosRecebidos.id = Guid.parse(id)
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  // Excluindo produto pelo id passado
  ExcluirProdutoId(id: string){
    this.storage.remove(id)
  }
}
}