import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'
import { CadastroPage } from './cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule, 
    ReactiveFormsModule,
    SimpleMaskModule,// //aqui tem que adicionar para o formulario rodar
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
