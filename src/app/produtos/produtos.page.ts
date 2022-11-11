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

    this.detalhesContato = {id: Guid.createEmpty(), nome:"", sobrenome:"", tipo:"",telefone:"", email:""}

    // validação do formulário enviado pela pagina HTML
    this.contatoForm = this.formBuilder.group({
      id: [this.detalhesContato.id],
      nome : [this.detalhesContato.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      sobrenome : [this.detalhesContato.sobrenome],
      tipo : [this.detalhesContato.tipo, Validators.required],
      telefone : [this.detalhesContato.telefone, Validators.required],
      email : [this.detalhesContato.email, Validators.email]
      })
    
    // captura do id do contato
    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))

    //id maior que 0, contato já existe então é carregado no objeto detalhesContato os valores salvos no array da classe "service"
    if (id != 'add'){
      this.objDadosService.FiltraContatosId(id).then(array => this.detalhesContato  = array)

    }
    else{
      //this.detalhesContato = {id, nome : "", sobrenome : "", tipo : "", telefone : "", email : ""}
      this.modoEdicao = true
    }
  }
}
