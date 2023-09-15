import { ChangeDetectorRef, Component } from '@angular/core';
import {ProductsService } from '../../../service/products/products.service';
import { AuthService } from '../../../service/auth/auth.service';

import { Product } from '../../../models/product.model'

@Component({
  selector: 'app-controle-itens',
  templateUrl: './controle-itens.component.html',
  styleUrls: ['./controle-itens.component.css']
})
export class ControleItensComponent {
  requestCadastroProduto = {
    name: '',
    type: '',
    price: '',
    image: ''
  };
  isAdmin: boolean = false;
  novoProduto: { name: string; type: string; price: string; image: string } = {
    name: '',
    type: '',
    price: '',
    image: ''
  };
    
  constructor(private productsService: ProductsService, private authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUserRole() === 'admin';
  }

  cadastrarItem() {
    this.novoProduto = {
      name: this.requestCadastroProduto.name,
      type: this.requestCadastroProduto.type,
      price: this.requestCadastroProduto.price,
      image: this.requestCadastroProduto.image
    };
  
    this.productsService.cadastrarProduto(this.novoProduto)
      .subscribe(
        (response: Product) => {
          if (response && response.id && response.name && response.type && response.price && response.image) {
            console.log('Funcionário cadastrado com sucesso. ID:', response.id);
            this.requestCadastroProduto = {
              name: '',
              type: '',
              price: '',
              image: ''
            };
  
            this.cdr.detectChanges();
          } else {
            console.error('Resposta do servidor está incompleta após o cadastro');
          }
        },
        error => {
          console.error('Erro ao cadastrar funcionário', error);
        }
      );
  }
  
}
