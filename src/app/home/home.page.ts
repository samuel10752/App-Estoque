import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Produto } from '../models/produto.models';
import { ProdutosService } from '../services/produtos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

}
