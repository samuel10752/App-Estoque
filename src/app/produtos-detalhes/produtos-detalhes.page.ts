import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.page.html',
  styleUrls: ['./produtos-detalhes.page.scss'],
})
export class ProdutosDetalhesPage implements OnInit {

  public produtoselecionado : any
  public modoDeEdicao = false
  handlerMessage = '';
  roleMessage = '';
  userForm : FormGroup

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private produto : ProdutosService,
    private alertController: AlertController
  ) { }

  iniciarEdicao() {
    this.modoDeEdicao = true
  }

  encerrarEdicao() {
    const id: number = Number (this.route.snapshot.paramMap.get('id'))
    if (id > 0 ){

      this.modoDeEdicao = false
    } else {
      this.produto.recebeDados(this.produtoselecionado)
      this.modoDeEdicao = false
    }
  }
  ngOnInit() {

    const id: number = Number (this.route.snapshot.paramMap.get('id'))
    if (id > 0 ){
       this.produtoselecionado = this.produto.enviardadosid(id)
    } else{

    this.produtoselecionado = {id , nome: "", numero: 0.0}
    this.modoDeEdicao= true
    }
  }

  deletarServico(){
    this.produto.ExcluirProdutoId(this.produtoselecionado)
    this.router.navigate(['/agenda-lista/'])
  }
    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = '';
          },
        },
        {
          text: 'OK',
          handler: () => {this.deletarServico();}
          },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
