import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SimpleMaskDirective, SimpleMaskPipe } from 'ngx-ion-simple-mask'

import { ProdutosPageRoutingModule } from './produtos-routing.module';

import { ProdutosPage } from './produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    SimpleMaskDirective,
    SimpleMaskPipe,

  ],
  declarations: [ProdutosPage]
})
export class ProdutosPageModule {}
