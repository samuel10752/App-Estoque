import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
import { Produto } from '../models/produto.models';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private storage : Storage
  ) { }

  inserir(todosdados : Produto){

    todosdados.id = Guid.create()
 
    this.storage.set(todosdados.id.toString(), JSON.stringify(todosdados))
  }

  async listartodos(){
    let arrayProduto: Produto [] = [];

    await this.storage.forEach((value: string) =>
        { const produto: Produto = JSON.parse(value); arrayProduto.push(produto)})
  }

}
