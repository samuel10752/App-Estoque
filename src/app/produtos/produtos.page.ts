import { Component,  OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public todosdados : any

  constructor(private dados : ProdutosService) { 
    this.todosdados = this.dados.EnviarTodosProdutos()
  }

  ngOnInit() {

  }
}
