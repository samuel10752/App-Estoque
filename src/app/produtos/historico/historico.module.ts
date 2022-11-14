import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPageRoutingModule } from './historico-routing.module';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'

import { HistoricoPage } from './historico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPageRoutingModule,
    SimpleMaskModule
  ],
  declarations: [HistoricoPage]
})
export class HistoricoPageModule {}
